import React, { Fragment, lazy, Suspense, useState } from 'react';
import { Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"

const About = lazy(() => import("./pages/about/about.jsx"))
const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const Rockets = lazy(() => import("./pages/rockets/rockets.jsx"))
const Missions = lazy(() => import("./pages/missions/missions.jsx"))
const LaunchPads = lazy(() => import("./pages/launch-pads/launch-pads.jsx"))
const Launches = lazy(() => import("./pages/launches/launches.jsx"))
const LandPads = lazy(() => import("./pages/land-pads/land-pads.jsx"))
const Dragons = lazy(() => import("./pages/dragons/dragons.jsx"))

const RocketInfo = lazy(() => import("./pages/rocket-info/rocket-info.jsx"))
const MissionsInfo = lazy(() => import("./pages/missions-info/missions-info.jsx"))
const LaunchPadsInfo = lazy(() => import("./pages/launch-pads-info/launch-pads-info.jsx"))
const LaunchInfo = lazy(() => import("./pages/launches-info/launches-info.jsx"))
const LandPadsInfo = lazy(() => import("./pages/land-pads-info/land-pads-info.jsx"))
const DragonsInfo = lazy(() => import("./pages/dragons-info/dragons-info.jsx"))



const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loading />}>
        <Route exact path="/" component={About} />
        <Route exact path="/homepage" component={HomePage} />

        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/missions" component={Missions} />
        <Route exact path="/launch-pads" component={LaunchPads} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/land-pads" component={LandPads} />
        <Route exact path="/dragons" component={Dragons} />

        <Route exact path="/rockets-information" component={RocketInfo} />
        <Route exact path="/missions-information" component={MissionsInfo} />
        <Route exact path="/launchpads-information" component={LaunchPadsInfo} />
        <Route exact path="/launches-information" component={LaunchInfo} />
        <Route exact path="/land-pads-information" component={LandPadsInfo} />
        <Route exact path="/dragons-information" component={DragonsInfo} />

      </Suspense>
    </Fragment>
  )

}

export default App;