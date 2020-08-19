import React, { Fragment } from 'react';
import { Link, Route } from "react-router-dom"

import './homepage.css';

const HomePage = () => {
    return (
        <Fragment>
            <h2 className="all-information">
                All Space X Information
            </h2>
            <div className="links">
                <div className="link">
                    <Link to="/rockets" >
                        <span>Rockets</span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/missions" >
                        <span>Missions</span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/launch-pads" >
                        <span>Launch Pads</span>
                    </Link>
                </div>
                <div className="link">
                    <Link to="/launches">
                        <span>Launches</span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;