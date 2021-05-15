import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getUser = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const addUser = (userObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/users.json`, userObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/users/${response.data.name}.json`, body)
        .then(() => {
          getUser(response.data.name).then((userObj) => resolve(userObj));
        });
    }).catch((error) => reject(error));
});

const getUserByUID = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getUser, addUser, getUserByUID };
