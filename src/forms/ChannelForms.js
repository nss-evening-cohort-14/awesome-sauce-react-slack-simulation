import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addChannel, updateChannel } from '../helpers/data/ChannelData';
import { addUserChannels } from '../helpers/data/userChannelData';

const ChannelForm = ({
  setChannels,
  channelName,
  firebaseKey,
  channelKey,
  userKey,
  user,
  uid
}) => {
  const [channel, setChannel] = useState({
    channelName: channelName || '',
    firebaseKey: firebaseKey || null,
    uid: uid || user.uid
  });

  const [userChannel, setUserChannel] = useState({
    channelKey: channelKey || '',
    firebaseKey: firebaseKey || null,
    userKey: uid || user.uid
  });

  const handleInputChange = (e) => {
    setChannel((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (channel.firebaseKey) {
      updateChannel(channel, user).then((channelArray) => setChannels(channelArray));
    } else {
      addChannel(channel, user).then((channelArray) => setChannels(channelArray));
      addUserChannels(userChannel, user, userKey, channelKey).then((userChannelArray) => setUserChannel(userChannelArray));
    }
  };

  return (
    <form
    autoComplete='off'
    onSubmit={handleSubmit}
    >
    <label>Channel Name:</label>
    <input name='channelName' type='text' placeholder='Channel Name' value={channel.channelName} onChange={handleInputChange}></input>
    </form>

  );
};

ChannelForm.propTypes = {
  setChannels: PropTypes.func,
  firebaseKey: PropTypes.string,
  channelName: PropTypes.string,
  channelKey: PropTypes.string,
  userKey: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default ChannelForm;
