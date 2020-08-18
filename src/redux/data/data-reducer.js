import DataActionTypes from "./data-types.js"

const INITIAL_STATE = {
    data: null
}

const DataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DataActionTypes.DISPLAY_DATA:
            return {
                ...state,
                data: action.payload
            }

        default:
            return {
                ...state
            }
    }
}


export default DataReducer;