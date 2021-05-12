import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getOrganizations } from '../helpers/data/organizationData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [organizations, setOrganizations] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getOrganizations().then(setOrganizations);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
          organizations={organizations}
          setOrganizations={setOrganizations}
        />
      </Router>
    </div>
  );
}

export default App;
