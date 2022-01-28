import React, { Component } from 'react';
import Row from './row.jsx';

const RowContainer = props => {
    const rows = [];
    
    for (let i = 0; i < props.data.length; i++) {
        //adding commas to market cap
        let marketcap = props.data[i].market_cap;
        let convert = marketcap.toString();
        let converted = ""
        for (let i = 1; i <= convert.length; i++) {
            if ((i % 3 === 0) && (i !== convert.length)) {
                converted = convert[convert.length - i] + converted;
                converted = "," + converted;
            } 
            else {
                converted = convert[convert.length - i] + converted
            }
        }

        rows.push(<Row 
            key = {i} 
            img = {props.data[i].image} 
            name = {props.data[i].name} 
            ppu = {props.data[i].current_price}
            marketcap = {converted} 
            ppuChange = {props.data[i].price_change_percentage_24h}
 
            />)
    }

    return (
        <div>
            {rows}
        </div>
    )
}

export default RowContainer;