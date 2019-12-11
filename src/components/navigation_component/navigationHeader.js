import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavigationHeader extends Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li>
                    <Link to="/home" href="/">Home</Link>
                </li>
                <li>
                    <Link to="/users" href="/users">Users</Link>
                </li>
            </ul>
        )
    }
}

export default NavigationHeader;