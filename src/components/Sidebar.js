import React from 'react';
import SiderbarLink from './SidebarLink';

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="logo"><i className="fa fa-twitter fa-3x" /></div>
            <div className="sidebar-links">
                <SiderbarLink><i className="fa fa-home" /> Home</SiderbarLink>
                <SiderbarLink><i className="fa fa-compass" /> Explore</SiderbarLink>
                <SiderbarLink><i className="fa fa-bell" /> Notifications</SiderbarLink>
                <SiderbarLink><i className="fa fa-envelope" /> Messages</SiderbarLink>
                <SiderbarLink><i className="fa fa-bookmark" /> Bookmarks</SiderbarLink>
                <SiderbarLink><i className="fa fa-list" /> Lists</SiderbarLink>
                <SiderbarLink isActive><i className="fa fa-user" /> Profile</SiderbarLink>
                <SiderbarLink><i className="fa fa-ellipsis-h" /> More</SiderbarLink>
            </div>
            <div className="tweet-button">
                <button>Tweet</button>
            </div>
        </div>
    );
}