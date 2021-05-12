import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrganizations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/organizations.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addOrganization = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/organizations.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/organizations/${response.data.name}.json`, body)
        .then(() => {
          getOrganizations().then((orsArray) => resolve(orsArray));
        });
    }).catch((error) => reject(error));
});

const updateOrganization = (obj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/organizations/${obj.firebaseKey}.json`, obj)
    .then(() => getOrganizations().then(resolve))
    .catch((error) => reject(error));
});

export {
  getOrganizations, addOrganization,
  updateOrganization
};
