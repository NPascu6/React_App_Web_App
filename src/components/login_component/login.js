import React, { Component } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { loginAction } from '../../actions';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userModel: {
                userName: '',
                email: '',
                password: ''
            },
            isAuthenticated: false
        }
    }

    login = () =>{
        let userCredentials = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }

        this.props.login(userCredentials)
    }

    componentDidUpdate(previousProps) {
        if (this.props.isAuthenticated !== previousProps.isAuthenticated) {
          this.setState({ isAuthenticated: this.props.isAuthenticated });
        }
      }

    render() {
        if (this.state.isAuthenticated === true) {
            return <Redirect to='/users' />
          }
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter user name" onChange={(event) => this.setState({ userName: event.target.value })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(event) => this.setState({ email: event.target.value })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} />
                            </Form.Group>
                            <Button onClick={this.login}>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { isAuthenticated: state.usersReducer.isAuthenticated };
};

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(loginAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);