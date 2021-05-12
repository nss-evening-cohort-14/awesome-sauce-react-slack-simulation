import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getMessages = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/messages.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getMessages;
