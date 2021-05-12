import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { addOrganization, updateOrganization } from '../helpers/data/organizationData';

const OrganizationForm = ({
  formTitle,
  setOrganizations,
  firebaseKey,
  icon,
  organizationName,
  uid
}) => {
  const [organization, setOrganization] = useState({
    firebaseKey: firebaseKey || null,
    icon: icon || '',
    organizationName: organizationName || '',
    uid
  });

  const handleInputChange = (e) => {
    setOrganization((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'position' ? (e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (organization.firebaseKey) {
      updateOrganization(organization).then((orgArray) => setOrganization(orgArray));
    } else {
      addOrganization(organization).then((response) => {
        setOrganizations(response);
      });

      setOrganizations({
        firebaseKey: null,
        icon: '',
        organizationName: ''
      });
    }
  };

  return (
    <>
      <div className='organization-form'>
        <Form
          id='addOrganizationForm'
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <FormGroup>
            <Label for="organizationName">Name: </Label>
            <Input
              organizationName='organizationName'
              id='organizationName'
              value={organization.organizationName}
              type='text'
              placeholder='Enter a Name'
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="icon">ICON: </Label>
            <Input
              name='icon'
              id='icon'
              value={organization.icon}
              type='text'
              onChange={handleInputChange}
            />
          </FormGroup>

          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </>
  );
};

OrganizationForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setOrganizations: PropTypes.func,
  firebaseKey: PropTypes.string,
  icon: PropTypes.string,
  organizationName: PropTypes.string,
  uid: PropTypes.string
};

export default OrganizationForm;