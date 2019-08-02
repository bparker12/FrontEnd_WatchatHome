import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import Login from './Auth/Login';
import WatchComp from '../Components/WatchComp/WatchComp'


class ApplicationViews extends Component {


    render() {
        return (

            <React.Fragment>
                <Route path="/" render={(props) => {
                    return <WatchComp {...props}
                        currentUser={this.props.currentUser} />
                }}
                />
                <Route path="/login"
                    render={props => {
                        return (
                            <Login {...props} />)
                    }} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)