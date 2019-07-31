import React, { Component } from 'react';
import { Button, Menu, Icon, Input } from "semantic-ui-react";
import APIManager from '../../Modules/APIManager';

export default class Navbar extends Component {

    state ={
        searchInput: "",
        info: ""
    }
    //this function clears session storage, and upon reload
    handleLogOut = () => {
        sessionStorage.clear()
        // this.props.history.push("/")
        window.location.reload();
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    searchData = () => {
        APIManager.omdbData(this.state.searchInput)
        .then(info => {
            console.log(info)
        })
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
                            placeholder='Search...'
                            position='absolute'
                            id="searchInput"
                            onChange={this.handleFieldChange}
                        />
                        <Button icon compact onClick={this.searchData}>
                            <Icon name="search" />
                        </Button>
                    </Menu.Item>
                    <Button compact color="orange" postion="right" onClick={this.handleLogOut}>Logout</Button>
                </Menu>
            </nav>
        )
    }
}
