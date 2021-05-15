import axios from 'axios';
import firebaseConfig from '../apiKeys';
import getChannels from './ChannelData';

const DBURL = firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getUserChannels = () => new Promise((resolve, reject) => {
  Promise.all([getChannels(), getUsers(), getUserChannels()])
    .then(([channels, user, channelUserJoin]) => {
      const allChannelUserArray = channels.map((channel) => {
        const userRelationshipArray = channelUserJoin.filter((uc) => uc.firebaseKey === channel.firebaseKey);

        const userInfoArray = userRelationshipArray.map((userRelate) => user.find((userMember) => userMember.firebaseKey === userRelate.firebaseKey));

        return { ...channel, user: userInfoArray };
      });
      resolve(allChannelUserArray);
    }).catch((error) => reject(error));
});

export { getUsers, getUserChannels };
