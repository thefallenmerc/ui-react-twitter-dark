import React from 'react';

export default function FeedHeaderLink(props) {
    return (
        <span className={"FeedHeaderLink" + (props.active ? " active" : "")}>
            {props.children}
        </span>
    );
} 