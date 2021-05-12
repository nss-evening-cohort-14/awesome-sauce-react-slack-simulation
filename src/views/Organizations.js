import React from 'react';
import PropTypes from 'prop-types';
import OrganizationCard from '../components/OrganizationCard';

function Organizations({ organizations, setOrganizations }) {
  return (
    <>
      <div className="card-container" >
        {organizations.map((orgInfo) => (
          <OrganizationCard
            key={orgInfo.firebaseKey}
            firebaseKey={orgInfo.firebaseKey}
            icon={orgInfo.icon}
            organizationName={orgInfo.organizationName}
            setOrganizations={setOrganizations}
          />
        ))};
    </div>
    </>
  );
}

Organizations.propTypes = {
  organizations: PropTypes.array.isRequired,
  setOrganizations: PropTypes.func.isRequired
};

export default Organizations;
