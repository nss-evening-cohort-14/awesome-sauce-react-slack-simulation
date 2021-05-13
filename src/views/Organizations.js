import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import OrganizationCard from '../components/OrganizationCard';
import OrganizationForm from '../components/OrganizationsForm';

function Organizations({
  user, organizations,
  setOrganizations
}) {
  const [showAddOrganization, setAddOrganization] = useState(false);

  const handleClick = () => {
    setAddOrganization((prevState) => !prevState);
  };

  return (
    <>
      <div className="card-container" >
        <div>
          {!showAddOrganization
            ? <Button onClick={handleClick}>Add Organization</Button>
            : <div>
              <Button onClick={handleClick}>Close</Button>
              <OrganizationForm
                setOrganizations={setOrganizations}
                user={user}
              />
            </div>
          }
        </div>
        {organizations.length && organizations.map((orgInfo) => (
          <OrganizationCard
            key={orgInfo.firebaseKey}
            firebaseKey={orgInfo.firebaseKey}
            icon={orgInfo.icon}
            organizationName={orgInfo.organizationName}
            setOrganizations={setOrganizations}
            uid={orgInfo.uid}
            user={user}
          />
        ))};
    </div>
    </>
  );
}

Organizations.propTypes = {
  organizations: PropTypes.array.isRequired,
  setOrganizations: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Organizations;