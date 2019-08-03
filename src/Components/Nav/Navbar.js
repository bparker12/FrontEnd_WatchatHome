import React, { Component } from 'react';
import { Button, Menu, Icon, Input } from "semantic-ui-react";
import SearchResults from '../SearchResults/SearchResults'

export default class Navbar extends Component {

    state ={
        info: ""
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
                <Menu  fixed pointing secondary >
                    <Menu.Item header as="h3" position="left">
                        <Icon name="user" />
                        Welcome {username}
                            </Menu.Item>
                    <Menu.Item>
                        <Input
                            placeholder='Search for movie or show...'
                            position='absolute'
                            id="searchInput"
                            required
                            onChange={this.props.handleFieldChange}
                        />
                        <Button icon compact type="submit" onClick={this.props.searchData}>
                            <Icon name="search" />
                        </Button>
                    <Button compact color="orange" postion="right" onClick={this.handleLogOut}>Logout</Button>
                    </Menu.Item>
                </Menu>
            </nav>
        )
    }
}
