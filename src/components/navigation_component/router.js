import React from 'react';
import { Card } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import Home from '../home_component/home';
import Users from '../users_component/users';
import Login from '../login_component/login';
import store from '../../store/index';

const routing = (
    <Provider store={store}>
        <Router>
            <Card>
                <Card.Body>
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <Link to="/home" href="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users" href="/users">Users</Link>
                        </li>
                    </ul>

                    <Route exact path="/" render={(props) => <Login {...props}/>} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/users" component={Users} />
                </Card.Body>
            </Card>
        </Router>
    </Provider>
)

export default routing;