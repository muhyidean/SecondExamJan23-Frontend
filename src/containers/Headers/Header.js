import React from "react";

import { Link } from 'react-router-dom';

// import logo from '../../assets/logos/miu-logo.png';

import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>Employee</li>
                    <li>Add Employee</li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;