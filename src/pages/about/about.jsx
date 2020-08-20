import React, { Fragment } from "react"
import { withRouter } from "react-router-dom"

import "./about.css"


const About = ({ history }) => {
    return (
        <Fragment>
            <div className="about-page">
                <h2>
                    Hi welcome to the Space X Wiki
                </h2>
                <span className="text">
                    This is a Library containing all information relavant to the company Space X.
                </span>
                <span className="text">
                    This Library has 100 percent of all the data in regards to the companys rockets, missions, launchpads, locations, and etc.
                </span>
                <span className="text">
                    Any information about Space X that you want to know, can be found here
                </span>
                <span className="go-to-library" onClick={() => history.push("/homepage")}>
                    Go to the Library
                </span>
            </div>
        </Fragment>
    )
}

export default withRouter(About)