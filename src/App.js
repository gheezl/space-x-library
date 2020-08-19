import React, { Fragment, lazy, Suspense, useState } from 'react';
import { Route } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks'

import './App.css';

import { InfoContext, DataContext, state } from "./contexts/contexts.js"
import { ROCKET_INFO, MISSION_INFO } from "./graphql/querys.js"

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const Rockets = lazy(() => import("./pages/rockets/rockets.jsx"))
const Missions = lazy(() => import("./pages/missions/missions.jsx"))
const RocketInfo = lazy(() => import("./pages/rocket-info/rocket-info.jsx"))
const MissionsInfo = lazy(() => import("./pages/missions-info/missions-info.jsx"))
const About = lazy(() => import("./pages/about/about.jsx"))



const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loading />}>
        <Route exact path="/" component={About} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/missions" component={Missions} />
        {
          false
            ? (
              <Route exact path="/information" component={MissionsInfo} />
            )
            : (
              <Route exact path="/information" component={RocketInfo} />
            )
        }
      </Suspense>
    </Fragment>
  )

}

export default App;