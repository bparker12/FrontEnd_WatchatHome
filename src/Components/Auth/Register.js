import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import { registerFunc, setSessionStorage } from './AuthManager'



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
            .then(user => {
                setSessionStorage(user)

            })
    }



    //this is the form rendered for the registration page
    render() {
        return (
            <Container>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='black' textAlign='center'>
                            Register for an Account
              </Header>
                        <Form size='large' onSubmit={this.submitReg}>
                            <Segment stacked>
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
                                    fluid icon='envelope  square'
                                    iconPosition='left'
                                    type='email'
                                    label="E-Mail"
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
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>

        )
    }
}

{/* <Message>
    New to us? <a href='#'>Sign Up</a>
</Message> */}