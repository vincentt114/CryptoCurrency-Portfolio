import React, { Component } from 'react';
import Row from './row.jsx';
import Header from './header.jsx';
import AddRow from './addRow.jsx';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Row />
                <AddRow />
            </div>
        );
    };
};

export default App;