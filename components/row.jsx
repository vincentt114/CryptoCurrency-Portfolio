import React, { Component } from 'react';

let data = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10000&page=1&sparkline=false', 
        {method: 'GET', headers: { Accept: 'application/json' }}
    )
    .then(response => response.json())
    .then(data => console.log(data))

class Row extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div className = "row">
                <p> <input id="test" type = 'text'></input> </p>
                <p> <input type = 'number'></input> </p>
                <p> <input type = 'number'></input> </p>
                <p> test2 </p>
                <p> sdfs </p>
            </div>
        )
    }
}

export default Row;