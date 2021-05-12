import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import getMessages from '../helpers/data/messageData';

function App() {
  const [messages, setMessages] = useState({});
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
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  useEffect(() => {
    getMessages().then((response) => setMessages(response));
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes messages={messages} />
      </Router>
    </div>
  );
}

export default App;
