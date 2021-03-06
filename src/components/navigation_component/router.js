import React from 'react';
import { Card } from 'react-bootstrap';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";

import Home from '../home_component/home';
import Users from '../users_component/users';
import Login from '../login_component/login';
import store from '../../store/index';
import ErrorScreen from '../custom_components/errorScreen';

const routing = (
    <Provider store={store}>
        <Router>
            <Card>
                <Card.Body>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/users" component={Users} />
                </Card.Body>
                 <ErrorScreen />
            </Card>
        </Router>
    </Provider>
)

export default routing;