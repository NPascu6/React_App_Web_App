import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'

class SearcField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filtered: []
        }
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.data
        })
    }

    filterTable = (e) => {
        let currentList = [];
        let newList = [];

        if (e.key === "Enter") {
            currentList = this.props.data;
            newList = currentList.filter(item => item.userId === parseInt(e.target.value));
            if(newList.length === 0)
            newList = currentList.filter(item => item.userName.toLowerCase() === e.target.value.toLowerCase());
            if(newList.length === 0)
            newList = currentList.filter(item => item.FirstName.toLowerCase() === e.target.value.toLowerCase());
            if(newList.length === 0)
            newList = currentList.filter(item => item.LastName.toLowerCase() === e.target.value.toLowerCase());
        } else {
            newList = this.props.items;
        }

        if (newList && newList.length > 0) {
            this.props.updateData(newList);
        }
        else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <InputGroup size="lg" className="mb-3">
                    <FormControl placeholder="Search db here..." onKeyUp={this.filterTable}/>
                </InputGroup>
            </div>
        )
    }

}

export default SearcField;