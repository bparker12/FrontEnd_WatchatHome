import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app'
import * as firebase from 'firebase/app'
import { firebaseConfig } from './config/firebase'


firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));


