import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ChannelCard from '../components/Channels';
import ChannelForm from '../forms/ChannelForms';

function ChannelsView({ user, setChannels, channels }) {
  const [showAddChannel, setAddChannel] = useState(false);

  const handleClick = () => {
    setAddChannel((prevState) => !prevState);
  };

  return (
    <div>
      <div>
        {!showAddChannel
          ? <Button onClick={handleClick}>Add Channel</Button>
          : <div>
              <Button onClick={handleClick}>Close</Button>
              <ChannelForm setChannels={setChannels} user={user} />
          </div>
        }
      </div>
      {channels.map((channelInfo) => (
        <ChannelCard
          key={channelInfo.firebaseKey}
          firebaseKey={channelInfo.firebaseKey}
          channelName={channelInfo.firebaseKey}
          uid={channelInfo.firebaseKey}
          setChannels={setChannels}
          user={user}
        />
      ))}
    </div>
  );
}

ChannelsView.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannels: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default ChannelsView;
