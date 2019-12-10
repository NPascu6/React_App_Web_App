import React, { Component } from 'react';
import { Table, Card } from 'react-bootstrap';
import DeleteButton from './delete_button';
import SearchField from './search_field';
import AddUser from './add_user';

class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentDidUpdate(previousProps) {
        if (this.props.users !== previousProps.users) {
            this.setState({ users: this.props.users });
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.addUser && !this.state.isEditMode ?
                        <AddUser
                            data={this.state.users}
                            addUser={this.addUser} />
                        :
                        <Card>
                            <Card.Body>
                                <h1>React Users</h1>
                                <SearchField
                                    data={this.state.users}
                                    updateData={this.props.updateData} />
                                {
                                    !this.state.isEditMode && !this.state.addUser ?
                                        <Table striped bordered hover >
                                            <thead>
                                                <tr>
                                                    <td>User Name</td>
                                                    <td>Email</td>
                                                    <td>First Name</td>
                                                    <td>Last Name</td>
                                                    <td>Start Date</td>
                                                    <td>End Date</td>
                                                    <td>Role</td>
                                                    <td>Action</td>
                                                </tr>
                                            </thead>
                                            <tbody className="card-body">
                                                {
                                                    this.state.users.map((user) => (
                                                        <tr
                                                            onClick={this.props.handleEditModel}
                                                            key={user.userId}>
                                                            <td hidden className="card-title">{user.userId}</td>
                                                            <td className="card-title">{user.userName}</td>
                                                            <td className="card-title">{user.email}</td>
                                                            <td className="card-title">{user.FirstName}</td>
                                                            <td className="card-title">{user.LastName}</td>
                                                            <td className="card-title">{user.StartDate.substr(0, user.StartDate.indexOf('T'))}</td>
                                                            <td className="card-title">{user.EndDate.substr(0, user.StartDate.indexOf('T'))}</td>
                                                            <td className="card-title">{user.RoleName}</td>
                                                            <td>
                                                                <DeleteButton deleteUser={this.props.deleteUser} />
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </Table>
                                        : null
                                }
                            </Card.Body>
                        </Card>
                }
            </div>
        )
    }
}

export default UsersTable;