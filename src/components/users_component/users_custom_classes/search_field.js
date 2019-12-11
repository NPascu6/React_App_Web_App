import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

class SearcField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            filter: event.target.value
        })
        debugger;
        this.props.filterUser(event.target.value);
    }

    render() {
        return (
            <div>
                <InputGroup size="lg" className="mb-3">
                    <FormControl placeholder="Search db here..." onChange={this.handleChange} value={this.state.filter} />
                </InputGroup>
            </div>
        )
    }

}

export default SearcField;