import * as types from '../actions/actiontypes';

const initialState = {
    crypto: '',
    units: 0,
    pricePerUnit: 0,
    rowID: 10000,
    rowList: [],
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_ROW:
            const newRowID = state.rowID + 1;

            const newRow = {
                rowID: newRowID,
                crypto: payload.crypto,
                units: payload.units,
                pricePerUnit: payload.pricePerUnit,
                img: payload.img
            }

            let rowList = state.rowList.slice();
            rowList.push(newRow);

            return {
                ...state,
                rowList: rowList,
                rowID: newRowID,
            };

        default: {
            return state;
        }
    }
}

export default mainReducer;