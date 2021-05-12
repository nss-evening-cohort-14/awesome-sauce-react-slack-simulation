import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import AddOrganization from '../views/AddOrganization';
import Home from '../views/Home';
import Organizations from '../views/Organizations';

function Routes({ user, organizations, setOrganizations }) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route
            exact
            path='/organizations'
            component={() => <Organizations organizations={organizations}
              setOrganizations={setOrganizations} />}
          />
          <Route
            user={user}
            path='/add-organization'
            component={() => <AddOrganization
              setOrganizations={setOrganizations} />}
          />
          <Route path='*' component={Home} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  organizations: PropTypes.array.isRequired,
  setOrganizations: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
