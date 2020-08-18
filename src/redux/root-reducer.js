import { combineReducers } from "redux";
import DataReducer from "./data/data-reducer.js"

const rootReducer = combineReducers({
    data: DataReducer
})

export default rootReducer;