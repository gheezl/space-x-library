import React, { Fragment, useState } from 'react';
import { Link, Route } from "react-router-dom"

import './homepage.css';

const HomePage = () => {
    let [toggleRockets, setToggleRockets] = useState(false)
    let [toggleMissions, setToggleMissions] = useState(false)
    let [toggleLaunchPads, setToggleLaunchPads] = useState(false)
    let [toggleLaunches, setToggleLaunches] = useState(false)
    let [toggleLandPads, setToggleLandPads] = useState(false)
    let [toggleDragons, setToggleDragons] = useState(false)
    let [toggleShips, setToggleShips] = useState(false)

    return (
        <Fragment>
            <h2 className="all-information">
                All Space X Information
            </h2>
            <div className="links">
                <div className="link">
                    <Link to="/rockets" >
                        <span onMouseEnter={() => setToggleRockets(!toggleRockets)} onMouseLeave={() => setToggleRockets(!toggleRockets)}>Rockets ☷</span>
                    </Link>
                    {toggleRockets
                        ? (<div className="drop-down">
                            <span>
                                All of the Space X rockets
                                    </span>
                        </div>)
                        : (null)}
                </div>
                <div className="link">
                    <Link to="/missions" >
                        <span onMouseEnter={() => setToggleMissions(!toggleMissions)} onMouseLeave={() => setToggleMissions(!toggleMissions)}>Missions ☷</span>
                    </Link>
                    {toggleMissions
                        ? (<div className="drop-down">
                            <span>
                                All of Space X's missions
                                    </span>
                        </div>)
                        : (null)}
                </div>
                <div className="link">
                    <Link to="/launch-pads" >
                        <span onMouseEnter={() => setToggleLaunchPads(!toggleLaunchPads)} onMouseLeave={() => setToggleLaunchPads(!toggleLaunchPads)}>Launch Pads ☷</span>
                    </Link>
                    {toggleLaunchPads
                        ? (<div className="drop-down">
                            <span>
                                All of the Space X launch pads
                                    </span>
                        </div>)
                        : (null)}
                </div>
                <div className="link">
                    <Link to="/launches">
                        <span onMouseEnter={() => setToggleLaunches(!toggleLaunches)} onMouseLeave={() => setToggleLaunches(!toggleLaunches)}>Launches ☷</span>
                    </Link>
                    {toggleLaunches
                        ? (<div className="drop-down">
                            <span>
                                All of Space X's rocket launches
                                    </span>
                        </div>)
                        : (null)}
                </div>
                <div className="link">
                    <Link to="/land-pads">
                        <span onMouseEnter={() => setToggleLandPads(!toggleLandPads)} onMouseLeave={() => setToggleLandPads(!toggleLandPads)}>Landing Pads ☷</span>
                    </Link>
                    {toggleLandPads
                        ? (<div className="drop-down">
                            <span>
                                All of Space X's landing pads
                                    </span>
                        </div>)
                        : (null)}
                </div>
                <div className="link">
                    <Link to="/dragons">
                        <span onMouseEnter={() => setToggleDragons(!toggleDragons)} onMouseLeave={() => setToggleDragons(!toggleDragons)}>Dragons ☷</span>
                    </Link>
                    {toggleDragons
                        ? (<div className="drop-down">
                            <span>
                                All of the Space X Dragons
                                    </span>
                        </div>)
                        : (null)}
                </div>
                <div className="link">
                    <Link to="/ships">
                        <span onMouseEnter={() => setToggleShips(!toggleShips)} onMouseLeave={() => setToggleShips(!toggleShips)}>Ships ☷</span>
                    </Link>
                    {toggleShips
                        ? (<div className="drop-down">
                            <span>
                                All of Space X's Ships
                                    </span>
                        </div>)
                        : (null)}
                </div>
            </div>
        </Fragment>
    )
}

export default HomePage;