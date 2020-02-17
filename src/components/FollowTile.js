import React from 'react';
import VerifiedBadge from './VerifiedBadge';

export default function FollowTile({ name, username, isVerified }) {
    return (
        <div className="FollowTile">
            <div className="user-tile">
                <img src={'https://randomuser.me/api/portraits/men/' + Math.ceil(Math.random() * 20) + '.jpg'} alt="Some User" />
                <div className="user-info">
                    <div className="user-name">{name} <VerifiedBadge isVerified={isVerified} /> </div>
                    <div className="username">{username}</div>
                </div>
            </div>
            <button>Follow</button>
        </div>
    )
}