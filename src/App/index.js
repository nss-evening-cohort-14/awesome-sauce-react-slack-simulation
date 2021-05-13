import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getOrganizations } from '../helpers/data/organizationData';
import { getChannels } from '../helpers/data/ChannelData';
import Routes from '../helpers/Routes';
import './App.scss';
import { getMessages } from '../helpers/data/messageData';

function App() {
  const [channels, setChannels] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

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
        getOrganizations().then((response) => setOrganizations(response));
        getChannels(userInfoObj).then((response) => setChannels(response));
        getMessages().then((response) => setMessages(response));
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
        />
      </Router>
    </div>
  );
}

export default App;
