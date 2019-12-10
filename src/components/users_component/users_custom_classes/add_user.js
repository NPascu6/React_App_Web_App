import React, { Component } from 'react'
import { Form, Button} from 'react-bootstrap'
import DatePicker from 'react-date-picker'
import { addUserAction } from '../../../actions';
import { connect } from "react-redux";

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId:"",
            FirstName: "",
            LastName: "",
            StartDate: "",
            EndDate: "",
            RoleName: "",
            email:"",
            userName:""
        }
    }

    handleSubmit = () => {
        let user = {
            userName:this.state.userName,
            email: this.state.email,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            StartDate: this.state.StartDate,
            EndDate: this.state.EndDate,
            RoleName: this.state.RoleName
        }
        debugger;
        this.props.addUser(user);
    }

    render() {
        return (
            <div className="container card">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control style={formStyle} onChange={(event) => this.setState({ userName: event.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control style={formStyle} onChange={(event) => this.setState({ email: event.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control style={formStyle} onChange={(event) => this.setState({ FirstName: event.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control style={formStyle} onChange={(event) => this.setState({ LastName: event.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker style={formStyle} value={this.state.StartDate} onChange={StartDate => this.setState({ StartDate })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label >End Date</Form.Label>
                        <DatePicker style={formStyle} value={this.state.EndDate}  onChange={EndDate => this.setState({ EndDate })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Role Id</Form.Label>
                        <Form.Control style={formStyle} onChange={(event) => this.setState({ RoleName: event.target.value })} />
                    </Form.Group>
                    <Button style={formStyle} type="submit" variant="success">Add User</Button>
                </Form>
            </div>
        )
    }
}

var formStyle = {
    "WebkitAppearance": "none",
    "appearance": "none"
}

const mapStateToProps = (state) => {
    return { users: state.usersReducer.users };
  };

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUserAction(user)),
  });

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);