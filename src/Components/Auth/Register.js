import React, { Component } from 'react';
import { Button, Form, Header, Message, Segment, } from 'semantic-ui-react'
import { registerFunc } from './AuthManager'



export default class RegistrationForm extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }
    //this is the function when the register form is submitted. It takes the inputs from the changes on the line that pushes to states and sets the requirements for firebase auth
    submitReg = () => {
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        registerFunc(user)
            .then(() => this.props.setAuthState())
                // this.props.history.push('/');

    }



    //this is the form rendered for the registration page
    render() {
        return (
                    <div hidden={!this.props.hidden} style={{'backgroundColor': "black"}}>
                        <Form size='large' onSubmit={this.submitReg}>
                            <Segment stacked>
                        <Header as='h2' color='black' textAlign='center'>
                            Register for an Account
                        </Header>
                                <Form.Input
                                    fluid icon="user circle"
                                    iconPosition='left'
                                    type="text"
                                    label="Username"
                                    placeholder="Enter an username"
                                    onChange={(evt) => this.setState({ username: evt.target.value })}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid icon='envelope square'
                                    iconPosition='left'
                                    type='email'
                                    label="E-mail"
                                    placeholder='E-mail address'
                                    onChange={(evt) => this.setState({ email: evt.target.value })}
                                />
                                <Form.Input
                                    fluid
                                    icon='chain'
                                    iconPosition='left'
                                    placeholder='Password'
                                    label="Password"
                                    type='password'
                                    onChange={(evt) => this.setState({ password: evt.target.value })}
                                />

                                <Button color='black' fluid size='large'>
                                    Submit
                                </Button>
                                    <Message>
                                        Already a member? <a href='' onClick={this.props.hideClick}>Go back to login</a>
                                    </Message>
                            </Segment>
                        </Form>
                        </div>
        )
    }
}
