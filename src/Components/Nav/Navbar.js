import React, { Component } from 'react';
import { Button, Menu, Icon, Input } from "semantic-ui-react";


export default class Navbar extends Component {

    state ={
        searchInput: "",
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
        console.log(stateToChange)

    }
    render() {
        return (
            <nav className="navBar">
                <Menu  fixed pointing secondary >
                    <Menu.Item header as="h3" position="left">
                        <Icon name="user" />
                        Welcome {this.props.user.username}
                            </Menu.Item>
                    <Menu.Item>
                        <Input
                            icon='search'
                            placeholder='Search...'
                            position='absolute'
                            onChange={this.handleFieldChange}
                        />
                    </Menu.Item>
                    <Button compact color="orange" postion="right" onClick={this.handleLogOut}>Logout</Button>
                </Menu>
            </nav>
        )
    }
}
