import React from 'react';

export default function SiderbarLink(props) {
    return (
        <div className={"SidebarLink" + (props.isActive ? " active" : "")}>
            {props.children}
        </div>
    )
}