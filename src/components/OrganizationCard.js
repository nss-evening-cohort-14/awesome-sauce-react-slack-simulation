import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardTitle
} from 'reactstrap';
import { deleteOrganization } from '../helpers/data/organizationData';
import OrganizationForm from '../forms/OrganizationsForm';
import x from '../assets/x.png';
import write from '../assets/write.png';
import './cstyles/orgCard.scss';

const OrganizationCard = ({
  uid,
  user,
  firebaseKey,
  icon,
  organizationName,
  setOrganizations
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteOrganization(firebaseKey, user)
          .then(setOrganizations);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <div className="orgCard">
      <CardBody>
        <img className="orgIcon" src={icon} alt="org"/>
        <CardTitle tag="h5">{organizationName}</CardTitle>
        <Button className="deleteBtn" onClick={() => handleClick('delete')}>
          <img src={x} alt="x button"/></Button>
        <Button className="editBtn" onClick={() => handleClick('edit')}>
          {editing ? <img className="close" src={x} alt="x button"/> : <img className="edit" src={write} alt="write button"/>}
        </Button>
        {editing
          && <OrganizationForm
            fromTitle='Edit Organization'
            uid={uid}
            user={user}
            firebaseKey={firebaseKey}
            icon={icon}
            organizationName={organizationName}
            setOrganizations={setOrganizations}
          />
        }
      </CardBody>
    </div>
  );
};

OrganizationCard.propTypes = {
  uid: PropTypes.string,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired,
  setOrganizations: PropTypes.func
};

export default OrganizationCard;
