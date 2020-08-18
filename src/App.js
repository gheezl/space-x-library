import React, { Fragment, lazy, Suspense, Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"

import RocketsContext from "./contexts/rockets/rockets-context.js"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const Rockets = lazy(() => import("./pages/rockets/rockets.jsx"))
const Missions = lazy(() => import("./pages/missions/missions.jsx"))
const Info = lazy(() => import("./pages/info/info.jsx"))
const About = lazy(() => import("./pages/about/about.jsx"))



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={About} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/missions" component={Missions} />
          <RocketsContext.Provider value="hi">
            <Route exact path="/information" component={Info} />
          </RocketsContext.Provider>
        </Suspense>
      </Fragment>
    )
  }
}

export default App;