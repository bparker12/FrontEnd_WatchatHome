import React, { Component } from 'react';
import { Button, Menu, Icon, Input, Dropdown } from "semantic-ui-react";
import SearchResults from '../SearchResults/SearchResults'
import { Link, withRouter} from "react-router-dom";
// import './NavBar.css'

class Navbar extends Component {

    state = {
        info: "",
    }
    //this function clears session storage, and upon reload
    handleLogOut = () => {
        sessionStorage.clear()
        this.props.history.push("/login")
        // window.location.reload();
    }



    render() {
        // let username = JSON.parse(sessionStorage.getItem("user")).username
        return (
            <nav className="navBar">
                <Menu fixed pointing secondary className="Menu" >
                    <Menu.Item header as="h3" position="left">
                        <Dropdown icon="user">
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} content="Home" to="/">
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} content="Profile" to="/profile">
                                </Dropdown.Item>
                                <Dropdown.Item text="Logout" onClick={this.handleLogOut} />
                            </Dropdown.Menu>
                        </Dropdown>
                        Welcome {this.props.currentUser.username}
                    </Menu.Item>
                    <Menu.Item>
                        <Input
                            value={this.props.value}
                            style={{ 'width': 300}}
                            placeholder='Search for movie or show...'
                            position='absolute'
                            id="searchInput"
                            onChange={this.props.handleFieldChange}
                            action={{icon: 'search', onClick: () => this.props.searchData()}}
                        />
                    </Menu.Item>
                </Menu>
            </nav>
        )
    }
}
export default withRouter(Navbar)
