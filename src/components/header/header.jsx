import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import './header.css';


const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="header-title">
                    <span >SPACE X WIKI</span>
                </div>
                <div className="about">
                    <Link to="/">About ☰</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;