import React from "react";
import PropTypes from "prop-types";

export default function Properties(props){
    return(
        <div>
            <h2>{props.byDefault}</h2>
            <ul>
                <li>{props.note}</li>
                <li>{props.num}</li>
                <li>{props.bol ? "true" : "false"}</li>
                <li>{props.arr.join(", ")}</li>
                <li>{props.obj.name + " - " + props.obj.email}</li>
                <li>{props.arr.map(props.method).join(", ")}</li>
                <li>{props.elementReact}</li>
                <li>{props.componentReact}</li>
            </ul>
        </div>
    );
}
// Creating properties by default.
Properties.defaultProps = {
    byDefault: "Las Props",
};
// npm i -S prop-types
Properties.propTypes = {
    num:PropTypes.number.isRequired,
};
