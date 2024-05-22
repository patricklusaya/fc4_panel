import logo from './logo.svg';
import * as firebase from 'firebase';
import './App.css';
import { useEffect, useState } from 'react';
import { firebaseConfig } from './firebaseConfig';
import Home from './components/Home';


function App() {

 


  useEffect(() => {
    // Check if an app has already been initialized
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Now you can safely use Firebase services
    // Example: Accessing Firestore
    const db = firebase.firestore();
    // You can now interact with Firestore through the 'db' variable
  }, []);




  return (
  <div className="App">

    <Home/>
    
  </div>
  );
}

export default App;
