import React, { Fragment, lazy, Suspense } from 'react';

import './App.css';

const RocketsHoc = lazy(() => import("./pages/rockets/rockets-hoc.jsx"))


const App = () => {
  return (
    <Fragment>
      <Suspense fallback={"loading..."}>
        <RocketsHoc />
      </Suspense>
    </Fragment>
  )
}

export default App;
