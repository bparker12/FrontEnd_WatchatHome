import React, { Component } from 'react';
import { Button, Menu, Icon, Input } from "semantic-ui-react";


export default class Navbar extends Component {

    handleLogOut = () => {
        sessionStorage.clear()
        this.props.history.push("/login")
        window.location.reload();
    }

    render() {
        return (
            <nav>
                <Menu pointing secondary>
                    <Menu.Item header as="h3" position="left">
                        <Icon name="user" />
                        Welcome Username
                            </Menu.Item>
                        <Menu.Item>
                            <Input
                            icon='search'
                            placeholder='Search...'
                            position='absolute'
                             />
                        </Menu.Item>
                        <Button primary postion="right" onClick={this.handleLogOut}>Logout</Button>
                </Menu>
            </nav>
                )
            }
}