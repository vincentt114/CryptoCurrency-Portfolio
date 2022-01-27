import React from 'react';
import Row from './row.jsx';

const populateRow = props => {
    const rows = [];
    for (let i = 0; i < props.rowList.length; i++) {
        rows.push(<Row key = {props.rowList[i].rowId} 
                crypto = {props.rowList[i].crypto} 
                units = {props.rowList[i].units} 
                pricePerUnit = {props.rowList[i].pricePerUnit} 
                img = {props.rowList[i].img} 
                />);
    }
    return (
        <div>
            {rows}
        </div>
    )
}

export default populateRow;