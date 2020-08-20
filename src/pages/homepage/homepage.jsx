import React, { Fragment, useState, lazy } from 'react';

import './homepage.css';

const HomePageLink = lazy(() => import("./homepage-link.jsx"))


const HomePage = () => {
    let [toggleRockets, setToggleRockets] = useState(false)
    let [toggleMissions, setToggleMissions] = useState(false)
    let [toggleLaunchPads, setToggleLaunchPads] = useState(false)
    let [toggleLaunches, setToggleLaunches] = useState(false)
    let [toggleLandPads, setToggleLandPads] = useState(false)
    let [toggleDragons, setToggleDragons] = useState(false)
    let [toggleShips, setToggleShips] = useState(false)
    let [toggleCapsules, setToggleCapsules] = useState(false)
    let [toggleCores, setToggleCores] = useState(false)

    return (
        <Fragment>
            <h2 className="all-information">
                All Space X Information
            </h2>
            <div className="links">
                <HomePageLink toggle={toggleRockets} setToggle={setToggleRockets} name="Rockets" />
                <HomePageLink toggle={toggleMissions} setToggle={setToggleMissions} name="Missions" />
                <HomePageLink toggle={toggleLaunchPads} setToggle={setToggleLaunchPads} name="LaunchPads" />
                <HomePageLink toggle={toggleLaunches} setToggle={setToggleLaunches} name="Launches" />
                <HomePageLink toggle={toggleLandPads} setToggle={setToggleLandPads} name="LandPads" />
                <HomePageLink toggle={toggleDragons} setToggle={setToggleDragons} name="Dragons" />
                <HomePageLink toggle={toggleShips} setToggle={setToggleShips} name="Ships" />
                <HomePageLink toggle={toggleCapsules} setToggle={setToggleCapsules} name="Capsules" />
                <HomePageLink toggle={toggleCores} setToggle={setToggleCores} name="Cores" />
            </div>
        </Fragment>
    )
}

export default HomePage;