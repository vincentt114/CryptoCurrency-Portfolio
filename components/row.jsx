import React, { Component } from 'react';

class Row extends Component {
    constructor () {
        super();
        this.state = {
            track: false
        }
        this.track = this.track.bind(this)
    }
    track () {
        this.setState({ track:!this.state.track })
    }
    render () {
        let row_class = this.state.track ? 'row tracked' : 'row untracked'
        return (
            <div className = {row_class}>
            <p> <img src = {this.props.img} /></p>
            <p> {this.props.name}</p>
            <p> ${this.props.ppu} </p>
            <p> ${this.props.marketcap} </p>
            <p> {this.props.ppuChange}%</p>
            <p> <button onClick = {this.track}>Track</button> </p>
        </div>
        )
    }
}

export default Row;

