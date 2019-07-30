import React, {Component} from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react'
import { loginFunc } from './AuthManager';


export default class Login extends Component {
        state = {
          email: '',
          password: ''
        }

        
        submitLog = () => {
          loginFunc(this.state.email, this.state.password)
            .then((user) => {
            //   this.props.onLogin(user);
            //   this.props.history.push('/');
              });
        }

     render() {
         return (
             <Container>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='black' textAlign='center'>
                            Log-in to your account
                        </Header>
                            <Form size='large' onSubmit={this.submitLog}>
                                <Segment stacked>
                                    <Form.Input
                                        fluid icon='user'
                                        iconPosition='left'
                                        placeholder='E-mail address'
                                        onChange={(evt) => this.setState({email: evt.target.value})}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        onChange={(evt) => this.setState({password: evt.target.value})}
                                    />

                                    <Button color='black' fluid size='large'>
                                        Login
                                    </Button>
                                    </Segment>
                                </Form>
                                    <Message>
                                        Not already a Member? <a href='#' onClick="">Sign Up</a>
                                    </Message>
                        </Grid.Column>
                    </Grid>
             </Container>
         )
     }

}
