import React from 'react';
import {
  Card, CardTitle, CardText
} from 'reactstrap';
import PropTypes from 'prop-types';

function Messages({
  text,
  timeStamp
}) {
  return (
    <div>
      <Card body className="text-center">
        <CardTitle tag="h5">Username</CardTitle>
        <CardText>{text}</CardText>
        <CardText>{timeStamp}</CardText>
      </Card>
    </div>
  );
}

Messages.propTypes = {
  text: PropTypes.string.isRequired,
  timeStamp: PropTypes.any.isRequired
};

export default Messages;
