import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ChannelCard from '../components/Channels';
import ChannelForm from '../forms/ChannelForms';
import './vstyles/channels.scss';
import plusSign from '../assets/plusSign.png';
import x from '../assets/x.png';
function ChannelsView({ user, setChannels, channels }) {
  const [showAddChannel, setAddChannel] = useState(false);

  const handleClick = () => {
    setAddChannel((prevState) => !prevState);
  };

  return (
    <div className="channelsView">
      <div>
        {!showAddChannel
          ? <Button className="channelAddBtn" onClick={handleClick}>
            <img src={plusSign} alt="plus button"/></Button>
          : <div>
            <Button className="closeForm" onClick={handleClick}><img src={x} alt="x button"/></Button>
            <ChannelForm setChannels={setChannels} user={user} />
          </div>
        }
      </div>
      {channels.map((channelInfo) => (
        <ChannelCard className="channelCard"
          key={channelInfo.firebaseKey}
          firebaseKey={channelInfo.firebaseKey}
          channelName={channelInfo.channelName}
          uid={channelInfo.uid}
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
