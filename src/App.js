import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';

const RocketsHoc = lazy(() => import("./pages/rockets/rockets-hoc.jsx"))


const App = () => {
  return (
    <Fragment>
      <Suspense fallback={"loading..."}>
        <Route exact path="/" component={RocketsHoc} />
      </Suspense>
    </Fragment>
  )
}

export default App;
