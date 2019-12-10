import React, { Component } from 'react';
import { Button}  from 'react-bootstrap';

class DeleteButton extends Component {

    handleSubmit = (e) => {
        let user = {
            userId: e.target.parentNode.parentNode.firstChild.innerText
        }
        debugger;
        this.props.deleteUser(user);
    }

    render(){
        return(
            <Button variant="danger" onClick={this.handleSubmit}>Remove User</Button>
        )
    }
}

export default DeleteButton;