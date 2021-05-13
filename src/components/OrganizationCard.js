import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardTitle
} from 'reactstrap';
import { deleteOrganization } from '../helpers/data/organizationData';
import OrganizationForm from './OrganizationsForm';

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
    <>
      <CardBody>
        <img src={icon} />
        <CardTitle tag="h5">{organizationName}</CardTitle>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Organization</Button>
        <Button color="info" onClick={() => handleClick('edit')}>
          {editing ? 'CloseForm' : 'Edit Organization'}
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
    </>
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
