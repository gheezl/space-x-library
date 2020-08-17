import React, { Fragment } from 'react';

import './header.css';


const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="header-title">
                    <span >Space X Library</span>
                </div>
                <div className="about">
                    <span>About</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;