import axios from 'axios';
import firebaseConfig from '../apiKeys';

const DBURL = firebaseConfig.databaseURL;

const getChannels = () => new Promise((resolve, reject) => {
  axios.get(`${DBURL}/channels.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addChannel = (channels, user) => new Promise((resolve, reject) => {
  axios.post(`${DBURL}/channels.json`, channels)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${DBURL}/channels/${response.data.name}.json`, body)
        .then(() => {
          getChannels(user).then((channelArray) => resolve(channelArray));
        });
    }).catch((error) => reject(error));
});

const deleteChannel = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${DBURL}/channels/${firebaseKey}.json`)
    .then(() => getChannels(user).then((channelArray) => resolve(channelArray)))
    .catch((error) => reject(error));
});

const updateChannel = (channels, user) => new Promise((resolve, reject) => {
  axios.patch(`${DBURL}/channels/${channels.firebaseKey}.json`, channels)
    .then(() => getChannels(user).then(resolve))
    .catch((error) => reject(error));
});

export {
  getChannels,
  addChannel,
  deleteChannel,
  updateChannel
};
