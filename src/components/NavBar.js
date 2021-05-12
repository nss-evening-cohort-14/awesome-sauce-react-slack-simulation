import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/data/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Slack Sauce</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Link className="nav-link" to="/organizations">Organizations</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/channels">Channels</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/Messages">Messages</Link>
          </NavItem>
          {
            user !== null
            && <NavItem>
              {
                user
                  ? <Button color='danger' onClick={signOutUser}> Sign Out </Button>
                  : <Button color='info' onClick={signInUser}> Sign In </Button>
              }
            </NavItem>
          }
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
