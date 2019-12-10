import React from "react";
import { useSelector } from "react-redux";

const Sections = () => {
    const styles = {
        sections: {
            width: "400px",
            border: "1px solid black",
            padding: "20px 20px 10px 20px"
        }
    };

    const colors = useSelector(state => {
        return state.color;
    });

    return (
        <div className="sections" style={styles.sections}>
            {colors.map((color, index) => {
                const sectionStyle = {
                    padding: "25px",
                    border: `1px solid ${color.value}`,
                    marginBottom: "10px",
                    color: color.value
                };
                return (
                    <div className="section" key={index} style={sectionStyle}>
                        {color.value}
                    </div>
                );
            })}
        </div>
    );
};

export default Sections;
