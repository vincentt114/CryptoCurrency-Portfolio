import React, { Component } from 'react';
import Row from './row.jsx';

class AddRow extends Component {
    constructor (props) {
        super(props);
        this.state = {}
        this.createRow = this.createRow.bind(this)
    }
    createRow (value) {
        return (
            document.querySelector('.header').append(<Row />)
        )
    }
    render() {
        return (
            <div className = "addRow">
                <input id = "addcrypto" type = 'text' placeholder = 'Enter CryptoCurrency Name'></input>
                <button id = "addcryptobutton" onClick = { this.createRow }>Add Crypto</button>
            </div>
        );
    };
}

export default AddRow;