import React, { Fragment, lazy, Suspense, Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const Rockets = lazy(() => import("./pages/rockets/rockets.jsx"))
const Missions = lazy(() => import("./pages/missions/missions.jsx"))
const Info = lazy(() => import("./pages/info/info.jsx"))



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/missions" component={Missions} />
          <Route exact path="/information" component={Info} />
        </Suspense>
      </Fragment>
    )
  }
}

export default App;