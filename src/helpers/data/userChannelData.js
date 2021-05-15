import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getChannels } from './ChannelData';

const DBURL = firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getUserChannelsJoin = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/userChannelJoin.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getUserChannels = () => new Promise((resolve, reject) => {
  Promise.all([getChannels(), getUsers(), getUserChannelsJoin()])
    .then(([channels, user, channelUserJoin]) => {
      const allChannelUserArray = channels.map((channel) => {
        const userRelationshipArray = channelUserJoin.filter((uc) => uc.firebaseKey === channel.firebaseKey);

        const userInfoArray = userRelationshipArray.map((userRelate) => user.find((userMember) => userMember.firebaseKey === userRelate.firebaseKey));

        return { ...channel, user: userInfoArray };
      });
      resolve(allChannelUserArray);
    }).catch((error) => reject(error));
});

const addUserChannels = (userChannelObject) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/userChannelJoin.json`, userChannelObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/userChannelJoin/${response.data.name}.json`, body)
        .then(() => {
          getUserChannels().then((userChannelArray) => resolve(userChannelArray));
        });
    }).catch((error) => reject(error));
});

const deleteUserChannels = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/userChannelJoin/${firebaseKey}.json`)
    .then(() => getUserChannels().then((userChannelArray) => resolve(userChannelArray)))
    .catch((error) => reject(error));
});

export {
  getUsers,
  getUserChannels,
  addUserChannels,
  deleteUserChannels,
  getUserChannelsJoin,
};
