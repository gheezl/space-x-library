import React, { Fragment, lazy } from 'react';

import './homepage.css';

const HomePageLink = lazy(() => import("./homepage-link.jsx"))


const HomePage = () => {
    return (
        <Fragment>
            <h2 className="all-information">
                All Space X Information
            </h2>
            <div className="links">
                <HomePageLink name="Rockets" />
                <HomePageLink name="Missions" />
                <HomePageLink name="LaunchPads" />
                <HomePageLink name="Launches" />
                <HomePageLink name="LandPads" />
                <HomePageLink name="Dragons" />
                <HomePageLink name="Ships" />
                <HomePageLink name="Capsules" />
                <HomePageLink name="Cores" />
            </div>
        </Fragment>
    )
}

export default HomePage;