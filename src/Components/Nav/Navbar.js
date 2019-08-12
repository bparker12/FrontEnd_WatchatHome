import React, { Component } from 'react';
import { Button, Menu, Icon, Input, Dropdown } from "semantic-ui-react";
import SearchResults from '../SearchResults/SearchResults'
import { Link, withRouter} from "react-router-dom";


class Navbar extends Component {

    state = {
        info: "",
    }
    //this function clears session storage, and upon reload
    handleLogOut = () => {
        sessionStorage.clear()
        // this.props.history.push("/")
        window.location.reload();
    }



    render() {
        let username = JSON.parse(sessionStorage.getItem("user")).username
        return (
            <nav className="navBar">
                <Menu fixed pointing secondary className="Menu" >
                    <Menu.Item header as="h3" position="left">
                        <Dropdown icon="user">
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/">Home</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/profile">Profile</Link>
                                </Dropdown.Item>
                                <Dropdown.Item text="Logout" onClick={this.handleLogOut} />
                            </Dropdown.Menu>
                        </Dropdown>
                        Welcome {username}
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
