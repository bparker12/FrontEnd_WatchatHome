import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Login from './Auth/Login';
import WatchComp from '../Components/WatchComp/WatchComp'


export default class ApplicationViews extends Component {

    state = {
        currentUser: sessionStorage.getItem('user')
    }

    render() {
        return (

            <React.Fragment>
                <Route path="/" render={(props) => {return <WatchComp {...props} />}} />
                <Route path="/login"
                    render={props =>{
                         return (
                        <Login {...props} />)}} />
            </React.Fragment>
        )
    }
}