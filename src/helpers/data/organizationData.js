import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrganizations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/organizations.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addOrganization = (organization, user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/organizations.json`, organization)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/organizations/${response.data.name}.json`, body)
        .then(() => {
          getOrganizations(user).then((orgArray) => resolve(orgArray));
        });
    }).catch((error) => reject(error));
});

const deleteOrganization = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/organizations/${firebaseKey}.json`)
    .then(() => getOrganizations(user).then((orgArray) => resolve(orgArray)))
    .catch((error) => reject(error));
});

const updateOrganization = (organizations, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/organizations/${organizations.firebaseKey}.json`, organizations)
    .then(() => getOrganizations(user).then(resolve))
    .catch((error) => reject(error));
});

const getOrgChannels = (channelId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/channels.json?orderBy="boardId"&equalTo="${channelId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getOrganizations, addOrganization,
  deleteOrganization, updateOrganization,
  getOrgChannels
};
