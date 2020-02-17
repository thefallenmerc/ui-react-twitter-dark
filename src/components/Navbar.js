import React from 'react';
import Navlink from './Navlink';
import SearchBox from './SearchBox';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div>
                    <Navlink>About</Navlink>
                    <Navlink>Help</Navlink>
                </div>
                <SearchBox />
                <Navlink withImage>Hey, Shubham! <img src="https://avatars3.githubusercontent.com/u/20546147?s=400&v=4" alt="Shubham Singh Chahar" /></Navlink>
            </div>
        )
    }
}