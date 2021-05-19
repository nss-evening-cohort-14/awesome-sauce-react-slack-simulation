import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import OrganizationCard from '../components/OrganizationCard';
import OrganizationForm from '../forms/OrganizationsForm';
import './vstyles/organizations.scss';
import plusSign from '../assets/plusSign.png'
import x from '../assets/x.png'
function Organizations({
  user, organizations,
  setOrganizations
}) {
  const [showAddOrganization, setAddOrganization] = useState(false);

  const handleClick = () => {
    setAddOrganization((prevState) => !prevState);
  };

  return (
    <div className="orgView">
      <div className="card-container" >
        <div>
          {!showAddOrganization
            ? <Button className="addOrgBtn" onClick={handleClick}>
              <img src={plusSign} alt="plus button"/></Button>
            : <div>
              <Button className="closeForm" onClick={handleClick}><img src={x} alt="x button"/></Button>
              <OrganizationForm
                setOrganizations={setOrganizations}
                user={user}
              />
            </div>
          }
        </div>
        {organizations.length && organizations.map((orgInfo) => (
          <OrganizationCard className="orgCard"
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
    </div>
  );
}

Organizations.propTypes = {
  organizations: PropTypes.array.isRequired,
  setOrganizations: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Organizations;
