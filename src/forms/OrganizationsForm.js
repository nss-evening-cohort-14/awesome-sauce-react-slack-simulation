import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addOrganization, updateOrganization } from '../helpers/data/organizationData';
import './fstyles/orgForm.scss';

const OrganizationForm = ({
  formTitle,
  setOrganizations,
  firebaseKey,
  icon,
  organizationName,
  user,
  uid
}) => {
  const [organization, setOrganization] = useState({
    icon: icon || '',
    organizationName: organizationName || '',
    firebaseKey: firebaseKey || null,
    uid: uid || user.uid
  });

  const handleInputChange = (e) => {
    setOrganization((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      // e.target.name === 'organizationName' ? (e.target.value) : e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (organization.firebaseKey) {
      updateOrganization(organization, user).then((orgArray) => setOrganizations(orgArray));
    } else {
      addOrganization(organization, user).then((response) => {
        setOrganizations(response);
        history.push('/organizations');
      });

      // Clears Input Fields
      setOrganization({
        icon: '',
        organizationName: '',
        firebaseKey: null
      });
    }
  };

  return (
    <>
      <h2>{formTitle}</h2>
      <form
        id='addOrganizationForm'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <formGroup>
          <label htmlFor="organizationName">Name: </label>
          <input
            name='organizationName'
            id='organizationName'
            value={organization.organizationName}
            type='text'
            placeholder='Enter a Name'
            onChange={handleInputChange}
          />
        </formGroup>

        <formGroup>
          <label htmlFor="icon">ICON: </label>
          <input
            name='icon'
            id='icon'
            value={organization.icon}
            type='text'
            onChange={handleInputChange}
          />
        </formGroup>

        <formGroup>
          <button className="orgSubmit" type='submit'>Submit</button>
        </formGroup>
      </form>
    </>
  );
};

OrganizationForm.propTypes = {
  formTitle: PropTypes.string,
  setOrganizations: PropTypes.func,
  firebaseKey: PropTypes.string,
  icon: PropTypes.string,
  organizationName: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default OrganizationForm;
