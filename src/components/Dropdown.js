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

    const dispatch = useDispatch();

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [optionClicked, setOptionClicked] = useState(false);

    const colors = useSelector(state => {
        return state.color;
    });

    // first create new array from colors with only the values
    // from each object, then filter out the duplications
    const noDuplicateColors = Array.from(new Set(colors.map((color) => {
        return color.value;
    })));

    const selectedValue = colors.length && optionClicked;

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
            setOptionClicked(false);
        }
    };

    return (
        <div className="dropdown" style={styles}>
            {selectedValue && (
                <div className="selected" style={styles.selectedValue}>
                    {colors[0].value}
                </div>
            )}
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
                    {noDuplicateColors.map((color, index) => {
                        const optionStyle = {
                            cursor: "pointer",
                            padding: "10px",
                            color: color
                        };

                        const colorsFiltered = colors.filter((item) => {
                            return item.value === color;
                        })

                        return (
                            <div
                                className="option"
                                style={optionStyle}
                                onClick={event => {
                                    dispatch(setSelectedValue(colorsFiltered));
                                    setDropdownVisible(!dropdownVisible);
                                    setOptionClicked(true);
                                }}
                                key={index}
                            >
                                {color}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
