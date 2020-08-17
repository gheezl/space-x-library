import React, { Fragment, lazy, Suspense, Component } from 'react';
import { Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"
import Loading from "./components/loading/loading.jsx"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const RocketsHoc = lazy(() => import("./pages/rockets/rockets-hoc.jsx"))
const MissionsHoc = lazy(() => import("./pages/missions/missions-hoc.jsx"))



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/rockets" component={RocketsHoc} />
          <Route exact path="/missions" component={MissionsHoc} />
        </Suspense>
      </Fragment>
    )
  }
}

export default App;