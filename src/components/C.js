import React from "react";
import "../styles.css";

export default function C(props){

    return(
        <div>
            <h1>{props.status}</h1>
            <h3>{props.passed * 345}</h3>
        </div>
    )
}