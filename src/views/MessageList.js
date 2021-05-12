import React from 'react';
import PropTypes from 'prop-types';
import Messages from '../components/Messages';

function MessageList({ messages }) {
  return (
    <div className="message-container">
      <br />
      {
        messages.map((message) => (
          <Messages
          key={message.firebaseKey}
          text={message.text}
          timeStamp={message.timeStamp}
          />
        ))
      }
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
