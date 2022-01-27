import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className = "header">
                <p> CryptoCurrency </p>
                <p> Cost per Unit </p> 
                <p> Total Amount </p> 
                <p> Total Value </p>
                <p> Profit/Loss </p>
            </div>
        );
    };
}

export default Header;