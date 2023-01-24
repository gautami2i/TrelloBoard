import React from 'react';
import "./Navbar.scss";
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <nav>
            <div className='container'>

                <div>
                    <h2>Trello Board</h2>
                </div>
                <div className='navigation'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
            </div>

        </nav>
    )
}
export default Navbar;