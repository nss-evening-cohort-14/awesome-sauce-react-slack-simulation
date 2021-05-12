import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Channels from '../views/ChannelsView';
import Organizations from '../views/Organizations';
import Home from '../views/Home';

function Routes({
  user,
  organizations,
  setOrganizations,
  channels,
  setChannels
}) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route
            exact
            path='/organizations'
            component={() => <Organizations
              user={user}
              organizations={organizations}
              setOrganizations={setOrganizations} />}
          />
          <Route exact path='/channels' component={() => <Channels user={user} channels={channels} setChannels={setChannels} />} />
          <Route path='*' component={Home} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannels: PropTypes.func.isRequired,
  organizations: PropTypes.array.isRequired,
  setOrganizations: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
