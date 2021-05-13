import React, { useState } from 'react';
import {
  Card, CardTitle, CardText, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteMessage } from '../helpers/data/messageData';
import MessageForm from './MessageForm';

function Messages({
  text,
  timeStamp,
  firebaseKey,
  setMessages
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteMessage(firebaseKey).then(setMessages);
        break;
      default: console.warn('nothing selected');
    }
  };

  return (
    <div>
      <Card body className="text-center">
        <CardTitle tag="h5">Username</CardTitle>
        <CardText>{text}</CardText>
        <CardText>{timeStamp}</CardText>
        <Button color='info' onClick={() => handleClick('edit')}>
          {editing ? 'Close' : 'Edit'}
        </Button>
        {
          editing && <MessageForm
          setMessages={setMessages}
          firebaseKey={firebaseKey}
          timeStamp={timeStamp}
          text={text}
          formTitle={'Edit Message'}
          />
        }
        <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
      </Card>
    </div>
  );
}

Messages.propTypes = {
  text: PropTypes.string.isRequired,
  timeStamp: PropTypes.any.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired
};

export default Messages;
