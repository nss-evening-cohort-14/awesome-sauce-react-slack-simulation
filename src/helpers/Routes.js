import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import MessageList from '../views/MessageList';

function Routes({ messages }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/messages' component={() => <MessageList messages={messages} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  messages: PropTypes.array.isRequired
};

export default Routes;
