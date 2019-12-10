import colorReducer from "./color";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    color: colorReducer
});

export default allReducers;
