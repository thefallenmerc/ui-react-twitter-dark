import React from 'react';

export default function Navlink(props) {
    return (
        <span className={"Navlink" + (props.withImage ? "" : " without-image")}>
            <div className="NavlinkBody">
                {props.children}
            </div>
        </span>
    );
}