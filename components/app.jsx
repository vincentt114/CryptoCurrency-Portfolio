import React, { Component } from 'react';
import Row from './row.jsx';
import Header from './header.jsx';
import AddRow from './addRow.jsx';
import PopulateRow from './populateRow.jsx'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    // provide pertinent state here
    rowList: state.rows.rowList
  });

const mapDispatchToProps = dispatch => ({
    addCard: (data) => dispatch(actions.addRowActionCreator(data))
})

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Row /> */}
                <PopulateRow rowList = {this.props.rowList} />
                <AddRow />
            </div>
        );
    };
};

export default connect(mapStateToProps)(App);
