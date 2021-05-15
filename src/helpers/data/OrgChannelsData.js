import { deleteOrganization, getOrgChannels } from './organizationData';
import { deleteChannel } from './ChannelData';

const deleteOrgChannels = (firebaseKey, user) => new Promise((resolve, reject) => {
  getOrgChannels(firebaseKey).then((orgChanArray) => {
    const deleteChannels = orgChanArray.map((chan) => deleteChannel(chan.firebaseKey, user));
    Promise.all(deleteChannels).then(() => resolve(deleteOrganization(firebaseKey, user)));
  }).catch((error) => reject(error));
});

// const deleteBoardPins = (firebaseKey, user) => new Promise((resolve, reject) => {
//   getBoardPins(firebaseKey).then((pinBoardArray) => {
//     const deletePins = pinBoardArray.map((pin) => deletePin(pin.firebaseKey, user));
//     Promise.all(deletePins).then(() => resolve(deleteBoard(firebaseKey, user)));
//   }).catch((error) => reject(error));
// });

export default deleteOrgChannels;
