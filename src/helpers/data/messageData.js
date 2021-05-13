import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getMessages = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/messages.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addMessage = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/messages.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/messages/${response.data.name}.json`, body)
        .then(() => {
          getMessages().then(resolve);
        });
    })
    .catch((error) => reject(error));
});

const updateMessage = (object) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/messages/${object.firebaseKey}.json`, object)
    .then(() => getMessages().then(resolve))
    .catch((error) => reject(error));
});

const deleteMessage = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/messages/${firebaseKey}.json`)
    .then(() => getMessages().then(resolve))
    .catch((error) => reject(error));
});

export {
  getMessages, addMessage, updateMessage, deleteMessage
};
