import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getOrganizations } from '../helpers/data/organizationData';
import { getChannels } from '../helpers/data/ChannelData';
import { getMessages } from '../helpers/data/messageData';
import { addUser, getUserByUID } from '../helpers/data/users';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [channels, setChannels] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({});

  const checkUser = (newUser) => {
    if (newUser) {
      const userArr = Object.values(newUser);
      setLoggedInUser(userArr[0]);
    } else {
      addUser(newUser).then((userResponse) => setLoggedInUser(userResponse));
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
        getUserByUID(authed.uid).then((singleUser) => checkUser(singleUser));
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
