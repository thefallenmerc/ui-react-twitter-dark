import React from 'react';

export default function VerifiedBadge({ isVerified }) {
    return isVerified
        ?
        <img className="VerifiedBadge" src="/verified.png" alt="Verified User" />
        :
        ''
        ;
}