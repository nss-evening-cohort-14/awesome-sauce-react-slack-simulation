import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getOrganizations, deleteOrganization } from './organizationData';
import { getChannels, deleteChannel } from './ChannelData';

const dbUrl = firebaseConfig.databaseURL;

const getOrgChannelsJoin = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orgChannelsJoin.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getOrganizationChannels = () => new Promise((resolve, reject) => {
  Promise.all([getOrganizations(), getChannels(), getOrgChannelsJoin()])
    .then(([organizations, channels, orgChannelJoin]) => {
      const allChannelsInfoArray = organizations.map((org) => {
        const orgRelationshipsArray = orgChannelJoin.filter((orgChannel) => orgChannel.orgKey === org.firebaseKey);

        const channelInfoArray = orgRelationshipsArray.map(
          (channelRelationship) => channels.find((chn) => chn.firebaseKey === channelRelationship.channelId)
        );

        return { ...organizations, channels: channelInfoArray };
      });
      resolve(allChannelsInfoArray);
    }).catch((error) => reject(error));
});

const deleteOrgChannels = (firebaseKey, user) => new Promise((resolve, reject) => {
  getOrgChannelsJoin(firebaseKey).then((orgChanArray) => {
    const deleteChannels = orgChanArray.map((chan) => deleteChannel(chan.firebaseKey, user));
    Promise.all(deleteChannels).then(() => resolve(deleteOrganization(firebaseKey, user)));
  }).catch((error) => reject(error));
});

export {
  getOrgChannelsJoin, getOrganizationChannels,
  deleteOrgChannels
};
