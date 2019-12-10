import React, { Component } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import axios from 'axios';

const API_URL = 'http://localhost:4000'
const url1 = `${API_URL}/login`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userModel: {
                userName: '',
                email:'',
                password: ''
            },
            isAuthenticated: false
        }
    }

    login = () => {
        let user = {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email
        }

        axios.post(url1, {
          data: user
        }).then((response) =>{
            debugger;
          this.props.authenticated = true;
        }).catch(function (error) {
          console.log(error);
        });
      }


    render() {
        return (
            <Container>
                <Card>
                    <Card.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter user name"  onChange={(event) => this.setState({userName: event.target.value })}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(event) => this.setState({email: event.target.value })} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(event) => this.setState({password: event.target.value })}/>
                        </Form.Group>
                        <Button onClick={this.login}>Login</Button>
                    </Form>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Login;