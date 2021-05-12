import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteOrganization } from '../helpers/data/organizationData';
import OrganizationForm from './OrganizationsForm';

const OrganizationCard = ({
  firebaseKey,
  icon,
  organizationName,
  setOrganizations
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':

    }
  }

  return (
    <>

    </>
  );
};
