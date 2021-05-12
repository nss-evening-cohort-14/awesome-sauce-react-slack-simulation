import React, { useState } from 'react';
import { Card, CardText, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteChannel } from '../helpers/data/ChannelData';
import ChannelForm from '../forms/ChannelForms';

const ChannelCard = ({
  uid,
  user,
  firebaseKey,
  channelName,
  setChannels
}) => {
  const [editingChannels, setEditingChannels] = useState(false);

  const handleClick = (type) => {
    if (type === 'delete') {
      deleteChannel(firebaseKey, user).then((channelArray) => setChannels(channelArray));
    } else if (type === 'edit') {
      setEditingChannels((prevState) => !prevState);
    }
  };

  return (
    <Card>
      <CardText>{channelName}</CardText>
      <Button onClick={() => handleClick('delete')}>Delete Channel</Button>
      <Button onClick={() => handleClick('edit')}>
        {editingChannels ? 'Close Form' : 'Edit Channel'}
      </Button>
      {editingChannels
      && <ChannelForm
          uid={uid}
          user={user}
          firebaseKey={firebaseKey}
          setChannels={setChannels}
          channelName={channelName}
        />
      }
    </Card>
  );
};

ChannelCard.propTypes = {
  uid: PropTypes.string.isRequired,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  setChannels: PropTypes.func
};

export default ChannelCard;
