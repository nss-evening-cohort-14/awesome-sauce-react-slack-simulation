import React, { useState } from 'react';
import firebase from 'firebase';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <>
      <div className='App'>
        <h2>Slack Sim</h2>

      </div>
    </>
  );
}

export default App;
