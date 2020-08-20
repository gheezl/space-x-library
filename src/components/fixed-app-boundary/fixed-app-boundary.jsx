import React, { Fragment } from 'react';

import './fixed-app-boundary.css';


const FixedAppBoundary = (props) => {
    return (
        <div className="fixed-app-boundary">
            {props.children}
        </div>
    )
}

export default FixedAppBoundary;