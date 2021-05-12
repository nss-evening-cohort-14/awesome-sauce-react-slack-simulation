import React from 'react';
import PropTypes from 'prop-types';
// import OrganizationForm from '../components/OrganizationsForm';

function AddOrganization({ setOrganizations }) {
  return (
    <div>
      {/* <OrganizationForm */}
        formTitle='Add Organization'
        setOrganizations={setOrganizations}
      />
    </div>
  );
}

AddOrganization.propTypes = {
  setOrganizations: PropTypes.func.isRequired
};

export default AddOrganization;
