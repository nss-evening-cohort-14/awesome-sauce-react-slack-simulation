import React from 'react';
import PropTypes from 'prop-types';
import Messages from '../components/Messages';
import MessageForm from '../components/MessageForm';

function MessageList({ messages, setMessages }) {
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
          />
        ))
      }
      <MessageForm formTitle={'New Message'} setMessages={setMessages}/>
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired
};

export default MessageList;
