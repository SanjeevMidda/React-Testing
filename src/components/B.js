import React from "react";
import "../styles.css";

export default function B(props){
    return(
        <div>
        {
            props.show ? <h1>Yes</h1>: <h1>No</h1>
        }
            <h1>{props.status}</h1>
        </div>
    )
}
