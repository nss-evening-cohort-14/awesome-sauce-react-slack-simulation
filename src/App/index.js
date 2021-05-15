import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getOrganizations } from '../helpers/data/organizationData';
import { getChannels } from '../helpers/data/ChannelData';
import { getMessages } from '../helpers/data/messageData';
import { getUserByUID } from '../helpers/data/users';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [channels, setChannels] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({});

  const checkUser = (newUser, authed) => {
    const test = Object.values(newUser);
    console.warn(test.length);
    if (newUser) {
      const userArr = Object.values(newUser);
      setLoggedInUser(userArr[0]);
    } else {
      const newUserInfoObj = {
        fullName: authed.displayName,
        imageURL: authed.photoURL,
        role: 'user',
        uid: authed.uid,
      };
      // addUser(newUserInfoObj).then((userResponse) => setLoggedInUser(userResponse));
      console.warn(newUserInfoObj);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          imageURL: authed.photoURL,
          role: 'user',
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getOrganizations().then((response) => setOrganizations(response));
        getChannels(userInfoObj).then((response) => setChannels(response));
        getMessages().then((response) => setMessages(response));
        getUserByUID(authed.uid).then((singleUser) => checkUser(singleUser, authed));
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes user={user}
          channels={channels}
          setChannels={setChannels}
          organizations={organizations}
          setOrganizations={setOrganizations}
          messages={messages}
          setMessages={setMessages}
          loggedInUser={loggedInUser}
        />
      </Router>
    </div>
  );
}

export default App;
