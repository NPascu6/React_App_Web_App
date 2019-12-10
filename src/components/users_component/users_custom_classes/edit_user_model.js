import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import { Form } from 'react-bootstrap';

class EditUserModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userName:"",
            email:"",
            FirstName: '',
            LastName: "",
            StartDate: new Date(),
            EndDate: new Date(),
            RoleName: ''
        }
    }

    handleSubmit = () => {
        let user = {
            userId: this.state.userId,
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            StartDate: this.state.StartDate,
            EndDate: this.state.EndDate
        }
        this.props.editUser(user);
    }

    componentDidMount() {
        this.setState({ userId: this.props.userId });
        this.setState({ FirstName: this.props.FirstName });
        this.setState({ LastName: this.props.LastName });
        this.setState({ StartDate: new Date(this.props.StartDate) });
        this.setState({ EndDate: new Date(this.props.EndDate) });
    }

    render() {
        return (
            <div className="container card">
                <Form onSubmit={this.handleSubmit}>
                    <p style={datePickerRowStyle}>
                        <label style={datePickerRowStyle.label}>First Name</label>
                        <input
                            value={this.state.FirstName}
                            style={formStyle}
                            onChange={(event) => this.setState({ FirstName: event.target.value })}
                        />
                    </p>
                    <p style={datePickerRowStyle}>
                        <label style={datePickerRowStyle.label}>Last Name</label>
                        <input
                            value={this.state.LastName}
                            style={formStyle}
                            onChange={(event) => this.setState({ LastName: event.target.value })}
                        />
                    </p>
                    <div style={datePickerRowStyle}>
                        <label style={datePickerRowStyle.label}>Start Date</label>
                        <DatePicker
                            value={this.state.StartDate}
                            style={formStyle}
                            type="date"
                            onChange={StartDate => this.setState({ StartDate })}
                        />
                        <label style={datePickerRowStyle.label}>End Date</label>
                        <DatePicker
                            value={this.state.EndDate}
                            style={formStyle}
                            type="date"
                            onChange={EndDate => this.setState({ EndDate })}
                        />
                    </div>
                    <button style={formStyle} type="submit" >Save User</button>
                </Form>
            </div>
        )
    }
}

var formStyle = {
    "WebkitAppearance": "none",
    "appearance": "none"
}

var datePickerRowStyle = {
    "display": "flex",
    "flexDirection": "row",
    "margin": "1em",
    label: {
        "margin": "1em"
    }
}

export default EditUserModel;