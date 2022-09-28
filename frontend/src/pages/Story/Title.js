import React from "react";
import './Title.css'

function Title(props) {
    return (
        <div className="storyTitle">
            {props.title}
        </div>
    )
}

export default Title;