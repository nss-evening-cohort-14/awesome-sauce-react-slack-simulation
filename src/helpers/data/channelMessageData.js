import axios from 'axios';
import firebaseConfig from '../apiKeys';
import getChannels from './ChannelData';
import getMessages from './messageData';

const DBURL = firebaseConfig.databaseURL;

const getChannelMessagesJoin = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/channelMessagesJoin.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getChannelMessages = () => new Promise((resolve, reject) => {
  Promise.all([getChannels(), getMessages(), getChannelMessagesJoin()])
    .then(([messages, channels, channelMessagesJoin]) => {
      const allMessageUserArray = messages.map((message) => {
        const channelRelationshipArray = channelMessagesJoin.filter((mc) => mc.firebaseKey === message.firebaseKey);

        const channelInfoArray = channelRelationshipArray.map((channelRelate) => channels.find((channelMember) => channelMember.firebaseKey === channelRelate.firebaseKey));

        return { ...message, channel: channelInfoArray };
      });
      resolve(allMessageUserArray);
    }).catch((error) => reject(error));
});

const addChannelMessages = (channelMessageObject) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/channelMessageJoin.json`, channelMessageObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/channelMessageJoin/${response.data.name}.json`, body)
        .then(() => {
          getChannelMessages().then((channelMessageArray) => resolve(channelMessageArray));
        });
    }).catch((error) => reject(error));
});

const deleteChannelMessages = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/channelMessageJoin/${firebaseKey}.json`)
    .then(() => getChannelMessages().then((channelMessageArray) => resolve(channelMessageArray)))
    .catch((error) => reject(error));
});

export { getChannelMessages, addChannelMessages, deleteChannelMessages };
