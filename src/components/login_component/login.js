import React, { Component } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';

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