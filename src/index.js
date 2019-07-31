import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './app'
import * as firebase from 'firebase/app'
import { firebaseConfig } from './config/firebase'


firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'))


