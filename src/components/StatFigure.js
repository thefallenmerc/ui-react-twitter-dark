import React from 'react';

export default function StatFigure({ title, count }) {
    return (
        <div className="StatFigure">
            {title}
            <span>{count}</span>
        </div>
    )
}