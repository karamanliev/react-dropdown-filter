const initialData = [
    {
        id: 1,
        value: "Red"
    },
    {
        id: 2,
        value: "Green"
    },
    {
        id: 3,
        value: "Blue"
    },
    {
        id: 4,
        value: "Orange"
    }
];

const colorReducer = (state = initialData, action) => {
    switch (action.type) {
        case "SET_SELECTED_VALUE":
            return (state = action.payload);

        case "INITIAL_SELECTED_VALUE":
            return (state = initialData);

        default:
            return state;
    }
};

export default colorReducer;
