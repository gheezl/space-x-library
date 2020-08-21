import React, { Fragment } from "react"

import "./error-display.css"


const ErrorDisplay = () => {
    return (
        <Fragment>
            <div className="error">
                <h1 className="error-title">ERROR</h1>
                <span className="error-message">I am sorry, there is a problem with the site rn. Please come back later.</span>
            </div>
        </Fragment>
    )
}

export default ErrorDisplay;