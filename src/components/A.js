import React from "react";
import "../styles.css";

function ChildComponent(props){
    return(
        <div>Passed via props from App component: {props.status}</div>
    )
}

export default function A(props){
    return(
        <div>
            <h1>{props.status}</h1>
            <ChildComponent status = {props.status}/>
        </div>
    )
}