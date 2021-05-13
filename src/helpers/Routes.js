import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import MessageList from '../views/MessageList';

function Routes({ messages, setMessages }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/messages' component={() => <MessageList
        messages={messages}
        setMessages={setMessages}
        />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessages: PropTypes.func.isRequired
};

export default Routes;
