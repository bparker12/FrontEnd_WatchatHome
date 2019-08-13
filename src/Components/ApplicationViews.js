import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import WatchComp from '../Components/WatchComp/WatchComp'
import SplashPage from './SplashPage/SplashPage';
// import { getUserFromSessionStorage } from './Auth/AuthManager'
// import Login from './Auth/Login';


class ApplicationViews extends Component {

    // state = {user: getUserFromSessionStorage()}

    render() {
        // console.log("watchlists appview", this.props.watchlists)
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <SplashPage {...props}
                        currentUser={this.props.currentUser}
                        watchlists={this.props.watchlists}
                        deleteCard={this.props.deleteCard}
                        updateCard={this.props.updateCard}
                    />
                }}
                    />
                <Route path="/profile" render={(props) => {
                    return <WatchComp {...props}
                        currentUser={this.props.currentUser}
                        watchlists={this.props.watchlists}
                        deleteCard={this.props.deleteCard}
                        updateCard={this.props.updateCard}
                    />
                }}
                />
                {/* <Route path="/login"
                    render={props => {
                        return (
                            <Login {...props}
                            onLogin={(user) => this.setState({ user: user })}                             />)
                    }} /> */}
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)