import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import Home from './home_component/home';
import Users from './users_component/users';
import Login from './login_component/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

var authenticated = false;

const routing = (
    <Router>
        <Card>
            <Card.Body>{
                authenticated ?
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <Link to="/home" href="/" data-toggle="tab">Home</Link>
                        </li>
                        <li>
                            <Link to="/users" href="/users" data-toggle="tab">Users</Link>
                        </li>
                    </ul>
                    : null
            }
                <Route exact path="/" render={(props) => <Login {...props} authenticated={authenticated} />} />
                <Route exact path="/home" component={Home} />
                <Route path="/users" component={Users} />
            </Card.Body>
        </Card>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));