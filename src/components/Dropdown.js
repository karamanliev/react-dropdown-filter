import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedValue, deleteSelectedValue } from "../actions";

const Dropdown = () => {
    const styles = {
        width: "300px",
        height: "70px",
        background: "#FFF",
        border: "1px solid black",
        position: "relative",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        button: {
            fontSize: "20px",
            right: "15px",
            position: "absolute",
            cursor: "pointer"
        },
        selectedValue: {
            fontSize: "1.5rem",
            marginLeft: "15px",
            color: "black"
        },
        options: {
            width: "300px",
            height: "auto",
            border: "1px solid black",
            padding: "10px",
            boxSizing: "border-box",
            position: "absolute",
            top: "calc(100% + 10px)"
        }
    };

    const colors = useSelector(state => {
        return state.color;
    });

    const dispatch = useDispatch();

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const selectedValue = colors.length === 1;

    let dropdownIcon;

    if (dropdownVisible && !selectedValue) {
        dropdownIcon = "🔼";
    } else if (!dropdownVisible && !selectedValue) {
        dropdownIcon = "🔽";
    } else if (!dropdownVisible && selectedValue) {
        dropdownIcon = "❌";
    }

    const dropdownButtonActions = event => {
        event.preventDefault();
        setDropdownVisible(!dropdownVisible);

        if (dropdownIcon === "❌") {
            dispatch(deleteSelectedValue());
            dropdownIcon = "🔽";
            setDropdownVisible(false);
        }
    };

    return (
        <div className="dropdown" style={styles}>
            {selectedValue ? (
                <div className="selected" style={styles.selectedValue}>
                    {colors[0].value}
                </div>
            ) : null}
            <div
                className="dropdownBtn"
                style={styles.button}
                onClick={dropdownButtonActions}
            >
                <span role="img" aria-label={dropdownIcon}>
                    {dropdownIcon}
                </span>
            </div>
            {dropdownVisible && (
                <div className="options" style={styles.options}>
                    {colors.map((color, index) => {
                        const optionStyle = {
                            cursor: "pointer",
                            padding: "10px",
                            color: color.value
                        };
                        return (
                            <div
                                className="option"
                                style={optionStyle}
                                onClick={event => {
                                    dispatch(setSelectedValue([color]));
                                    setDropdownVisible(!dropdownVisible);
                                }}
                                key={index}
                            >
                                {color.value}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
