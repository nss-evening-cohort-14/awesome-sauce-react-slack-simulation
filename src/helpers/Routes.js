import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Channels from '../views/ChannelsView';
import Home from '../views/Home';

function Routes({ user, channels, setChannels }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/channels' component={() => <Channels user={user} channels={channels} setChannels={setChannels} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannels: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
