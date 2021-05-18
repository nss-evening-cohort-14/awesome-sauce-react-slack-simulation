import React, { useState } from 'react';
import { CardBody, CardText, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteChannel } from '../helpers/data/ChannelData';
import ChannelForm from '../forms/ChannelForms';
import write from '../assets/write.png';
import x from '../assets/x.png';
import './cstyles/channels.scss';

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
    <div className="channelCard">
    <CardBody>
      <CardText>{channelName}</CardText>
      <Button className="deleteBtn" onClick={() => handleClick('delete')}>
      <img src={x}/>
      </Button>
      <Button className="editBtn" onClick={() => handleClick('edit')}>
        {editingChannels ? <img className="close" src={x}/> : <img className="edit" src={write}/>}
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
    </CardBody>
    </div>
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
