import React from 'react';

export default function TrendLink({ tag, count }) {
    return (
        <div className="TrendLink">
            {tag}
            <span>{count}</span>
            <i />
        </div>
    )
}