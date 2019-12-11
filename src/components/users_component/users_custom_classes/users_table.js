import React, { Component } from 'react';
import { Table, Card } from 'react-bootstrap';
import DeleteButton from './delete_button';
import SearchField from './search_field';

class UsersTable extends Component {
    render() {
        return (
            <div>
                {
                    !this.props.isAddMode && !this.props.isEditMode ?
                        <Card>
                            <Card.Body>
                                <h1>React Users</h1>
                                <SearchField
                                    users={this.props.users}
                                    updateData={this.props.updateData} />
                                {
                                    !this.props.isEditMode && !this.props.addUser ?
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
                                                    this.props.users.map((user) => (
                                                        <tr
                                                            onClick={this.props.handleEditModel}
                                                            key={user.userId}>
                                                            <td hidden className="card-title">{user.userId}</td>
                                                            <td className="card-title">{user.userName}</td>
                                                            <td className="card-title">{user.email}</td>
                                                            <td className="card-title">{user.FirstName}</td>
                                                            <td className="card-title">{user.LastName}</td>
                                                            <td className="card-title">{new Date(user.StartDate).toUTCString()}</td>
                                                            <td className="card-title">{new Date(user.EndDate).toUTCString()}</td>
                                                            <td className="card-title">{user.RoleName}</td>
                                                            <td>
                                                                <DeleteButton deleteUser={this.props.deleteUser} users={this.props.users} />
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
                        : null}
            </div>
        )
    }
}

export default UsersTable;