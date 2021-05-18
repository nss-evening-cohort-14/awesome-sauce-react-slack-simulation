import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addMessage, updateMessage } from '../helpers/data/messageData';

function MessageForm({
  formTitle, setMessages, text, firebaseKey, timeStamp, userFirebaseKey
}) {
  const [newMessage, setNewMessage] = useState({
    text: text || '',
    timeStamp: timeStamp || 'just now',
    userFirebaseKey,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setNewMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.firebaseKey) {
      updateMessage(newMessage).then(setMessages);
    } else {
      addMessage(newMessage).then((messageArray) => setMessages(messageArray));
    }
  };

  return (
    <div className="message-form">
      <form className='mt-3' id='add-player-form' autoComplete='off' onSubmit={handleSubmit}>
        <label>{formTitle}</label>
        <input
        className='ml-2'
        name='text'
        type='text'
        placeholder='message'
        value={newMessage.value}
        onChange={handleInputChange} />
        <br/>
        <Button color='primary' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

MessageForm.propTypes = {
  setMessages: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  text: PropTypes.string,
  firebaseKey: PropTypes.string,
  timeStamp: PropTypes.string,
  userFirebaseKey: PropTypes.string.isRequired
};

export default MessageForm;
