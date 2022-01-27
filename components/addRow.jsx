import React, { Component } from 'react';
import Row from './row.jsx';

class AddRow extends Component {
    constructor (props) {
        super(props);
        this.state = {}
        this.createRow = this.createRow.bind(this);
    }
    createRow (event) {
        event.preventDefault();
        console.log('working!');
    }
    createRow2 (value) {
        return (
            <div>
                <Row />
            </div>
        )
    }
    render() {
        return (
            <div className = "addRow">
                <input type = 'text' placeholder = 'crypto name'></input>
                <button onClick = { this.createRow }>track</button>
            </div>
        );
    };
}

export default AddRow;