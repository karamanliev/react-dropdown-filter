import data from "./data"

const colorReducer = (state = data, action) => {
    switch (action.type) {
        case "SET_SELECTED_VALUE":
            return (state = action.payload);

        case "INITIAL_SELECTED_VALUE":
            return (state = data);

        default:
            return state;
    }
};

export default colorReducer;
