import React, { Component } from 'react';
import Login from './Components/Auth/Login';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Nav/Navbar'
import ApplicationViews from './Components/ApplicationViews'


class App extends Component {

    state = {
        authenticated: sessionStorage.getItem("user")
    }
//this function
    setAuthState = () => {
        if (sessionStorage.getItem("user")) {
            this.setState({ authenticated: true })
        } else {
            this.setState({ authenticated: false })
        }
    }


    render() {
        if (this.state.authenticated) {
            return (
                <React.Fragment>
                    <Navbar />
                    <ApplicationViews  isAuthenticated={this.state.authenticated}    />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Login setAuthState={this.setAuthState} />
                </React.Fragment>
            )
        }
    }
}
export default App