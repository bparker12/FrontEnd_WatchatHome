import React, { Component } from 'react';
import Login from './Components/Auth/Login';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Nav/Navbar'
import ApplicationViews from './Components/ApplicationViews'
import APIManager from './Modules/APIManager'



class App extends Component {

    state = {
        authenticated: sessionStorage.getItem('user'),
        currentUser: JSON.parse(sessionStorage.getItem('user')),
        searchInput: "",
        APIinfo: '',
        openModal: false
    }

    toggle = () => {
        this.setState({openModal: !this.state.openModal})
    }


    //this function verifies if the user is signed in by checking session storage
    setAuthState = () => {
        if (sessionStorage.getItem("user")) {
            this.setState({ authenticated: true })
        } else {
            this.setState({ authenticated: false })
        }
    }

    searchData = () => {
        APIManager.omdbData(this.state.searchInput)
            .then((info) => {
                this.setState({ APIinfo: info })
                console.log(this.state.APIinfo)
            })
            this.toggle()
            console.log(this.state.openModal)
    }


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    //this renders the dom based on whether a user is logged in or not and session storage has a value for "user"
    render() {
        if (this.state.authenticated) {
            return (
                <React.Fragment>
                    <Navbar currentUser={this.state.currentUser} searchData={this.searchData} handleFieldChange={this.handleFieldChange} openModal={this.state.openModal} toggle={this.toggle}/>
                    <searchResults APIinfo={this.state.APIinfo} show={this.state.openModal} onClose={this.toggle} />
                    <ApplicationViews isAuthenticated={this.state.authenticated} />
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