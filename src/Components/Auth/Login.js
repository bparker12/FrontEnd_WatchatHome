import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import { loginFunc } from './AuthManager';
import RegistrationForm from './Register';
import "./login.css"


export default class Login extends Component {
    state = {
        email: '',
        password: '',
        hidden: false
    }


    submitLog = () => {
        loginFunc(this.state.email, this.state.password)
            .then((user) => {
                //   this.props.onLogin(user);
                //   this.props.history.push('/');
            });
    }

    hideClick = (evt) => {
        evt.preventDefault()
        this.setState({ hidden: !this.state.hidden })
        console.log("it works!")
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <RegistrationForm hidden={this.state.hidden} hideClick={this.hideClick} />
                        <div hidden={this.state.hidden}>
                            <Form size='large' onSubmit={this.submitLog} >
                                <Segment stacked>
                                    <Header as='h2' color='black' textAlign='center'>
                                        Log-in to your account
                                    </Header>
                                    <Form.Input
                                        fluid icon='user'
                                        iconPosition='left'
                                        placeholder='E-mail address'
                                        label='E-mail'
                                        onChange={(evt) => this.setState({ email: evt.target.value })}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        label='Password'
                                        onChange={(evt) => this.setState({ password: evt.target.value })}
                                    />

                                    <Button color='black' fluid size='large'>
                                        Login
                                    </Button>
                                </Segment>
                            </Form>
                            <Message>
                                Not already a Member? <a href='' onClick={this.hideClick}>Sign Up</a>
                            </Message>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
         )
    }

}
