import React, { Component } from 'react';


const Row = props => {
        return (
            <div className = "row">
                <p> {props.img} </p>
                <p> {props.crypto} </p>
                <p> {props.pricePerUnit}</p>
                <p> {props.units} </p>
                <p> {props.pricePerUnit * props.units} </p>
                <p> MATH </p>
            </div>
    );
}

export default Row;