import React, { Fragment, lazy, Suspense } from 'react';
import { Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.jsx"

const HomePage = lazy(() => import("./pages/homepage/homepage.jsx"))
const RocketsHoc = lazy(() => import("./pages/rockets/rockets-hoc.jsx"))
const MissionsHoc = lazy(() => import("./pages/missions/missions-hoc.jsx"))



const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={"loading..."}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rockets" component={RocketsHoc} />
        <Route exact path="/missions" component={MissionsHoc} />
      </Suspense>
    </Fragment>
  )
}

export default App;
