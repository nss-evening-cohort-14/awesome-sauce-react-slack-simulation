import React, { useState, useEffect } from 'react';
import {
  Card, CardTitle, CardText, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteMessage } from '../helpers/data/messageData';
import MessageForm from './MessageForm';
import { getUser } from '../helpers/data/users';

function Messages({
  text,
  timeStamp,
  firebaseKey,
  setMessages,
  userFirebaseKey,
  loggedUserKey
}) {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState({});

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

  const userCanEdit = () => (
    <>
      <Button color='info' onClick={() => handleClick('edit')}>
        {editing ? 'Close' : 'Edit'}
      </Button>
        {
          editing && <MessageForm
          setMessages={setMessages}
          firebaseKey={firebaseKey}
          timeStamp={timeStamp}
          text={text}
          userFirebaseKey={userFirebaseKey}
          formTitle={'Edit Message'}
          />
        }
        <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
    </>
  );

  const userReactions = () => (
    <>
    <Button color='success'>Like</Button>
    <Button color='warning'>Dislike</Button>
    </>
  );

  useEffect(() => {
    getUser(userFirebaseKey).then((userObj) => setUsername(userObj));
  }, []);

  return (
    <div>
      <Card body className="text-center">
        <CardTitle tag="h3">{username.fullName}</CardTitle>
        <CardText>{text}</CardText>
        <CardText>{timeStamp}</CardText>
        { loggedUserKey === userFirebaseKey ? userCanEdit() : userReactions() }
      </Card>
    </div>
  );
}

Messages.propTypes = {
  text: PropTypes.string.isRequired,
  timeStamp: PropTypes.any.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  setMessages: PropTypes.func.isRequired,
  userFirebaseKey: PropTypes.string.isRequired,
  loggedUserKey: PropTypes.string.isRequired
};

export default Messages;
