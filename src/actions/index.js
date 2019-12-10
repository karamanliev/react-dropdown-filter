export const setSelectedValue = targetColor => {
    return {
        type: "SET_SELECTED_VALUE",
        payload: targetColor
    };
};

export const deleteSelectedValue = () => {
    return {
        type: "INITIAL_SELECTED_VALUE"
    };
};
