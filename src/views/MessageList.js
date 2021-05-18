import React from 'react';
import PropTypes from 'prop-types';
import Messages from '../components/Messages';
import MessageForm from '../forms/MessageForm';

function MessageList({ messages, setMessages, loggedInUser }) {
  return (
    <div className="message-container">
      <br />
      {
        messages.map((message) => (
          <Messages
          key={message.firebaseKey}
          firebaseKey={message.firebaseKey}
          text={message.text}
          timeStamp={message.timeStamp}
          setMessages={setMessages}
          userFirebaseKey={message.userFirebaseKey}
          loggedUserKey={loggedInUser.firebaseKey}
          />
        ))
      }
      <MessageForm
      formTitle={'New Message'}
      setMessages={setMessages}
      userFirebaseKey={loggedInUser.firebaseKey}
      />
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired,
  loggedInUser: PropTypes.object.isRequired
};

export default MessageList;
