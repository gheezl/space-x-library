import React, { Fragment, useState } from 'react';
import { Link, Route } from "react-router-dom"

import './homepage.css';

const HomePage = () => {
    let [toggleRockets, setToggleRockets] = useState(false)
    let [toggleMissions, setToggleMissions] = useState(false)
    let [toggleLaunchPads, setToggleLaunchPads] = useState(false)

    return (
        <Fragment>
            <h2 className="all-information">
                All Space X Information
            </h2>
            <div className="links">
                <div className="link">
                    <Link to="/rockets" >
                        <span
                            onMouseEnter={() => setToggleRockets(!toggleRockets)}
                            onMouseLeave={() => setToggleRockets(!toggleRockets)}
                        >
                            Rockets ☷
                        </span>
                    </Link>
                    {
                        toggleRockets
                            ? (
                                <div className="all-rockets">
                                    <span>
                                        All of the Space X rockets
                                    </span>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>
                <div className="link">
                    <Link to="/missions" >
                        <span
                            onMouseEnter={() => setToggleMissions(!toggleMissions)}
                            onMouseLeave={() => setToggleMissions(!toggleMissions)}
                        >
                            Missions ☷
                        </span>
                    </Link>
                    {
                        toggleMissions
                            ? (
                                <div className="all-rockets">
                                    <span>
                                        All of Space X's missions
                                    </span>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>
                <div className="link">
                    <Link to="/launch-pads" >
                        <span
                            onMouseEnter={() => setToggleLaunchPads(!toggleLaunchPads)}
                            onMouseLeave={() => setToggleLaunchPads(!toggleLaunchPads)}
                        >Launch Pads ☷</span>
                    </Link>
                    {
                        toggleLaunchPads
                            ? (
                                <div className="all-rockets">
                                    <span>
                                        All of the Space X launch pads
                                    </span>
                                </div>
                            )
                            : (
                                null
                            )
                    }
                </div>
                <div className="link">
                    <Link to="/launches">
                        <span>Launches ☷</span>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;