import * as types from 'actiontypes';

export const addRowActionCreator = data => ({
    type: types.ADD_ROW,
    payload: data
})