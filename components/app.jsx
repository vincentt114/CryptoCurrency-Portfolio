import React, { Component } from 'react';
import Row from './row.jsx';
import Header from './header.jsx';
import AddRow from './addRow.jsx';
import RowContainer from './rowContainer.jsx';

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            untracked: true
        }
    }
    componentDidMount() {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50000&page=1&sparkline=false', 
        {method: 'GET', headers: { Accept: 'application/json' }})
            .then(response => response.json())
            .then(response => this.setState({
                data: response
            }))
            .then(response => console.log(this.state.data))
    }

    render() {
        return (
            <div>
                <Header />
                <RowContainer click = {this.track_click} data = {this.state.data}/>
                <AddRow />
            </div>
        );
    };
};

export default App;