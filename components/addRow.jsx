import React, { Component } from 'react';

class AddRow extends Component {
    render() {
        return (
            <div className = 'addRow'>
                <p> Add additional Crypto to track: </p>
                <input use = "coinType" type = 'text' placeholder = 'Coin Name or Ticker'></input> <br/>
                <input use = "amount" type = 'number' placeholder = 'Units purchased'></input> <br />
                <input use = "cost" type = 'number' placeholder = 'Purchased at $'></input>
                <p><button type = 'button'>Add Crypto</button></p>
            </div>
        );
    };
}

export default AddRow;