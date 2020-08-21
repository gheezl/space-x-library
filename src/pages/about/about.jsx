import React, { Fragment } from "react"
import { withRouter } from "react-router-dom"

import "./about.css"


const About = ({ history }) => {
    return (
        <Fragment>
            <h2 className="welcome">
                Hi welcome to the Space X Wiki
                </h2>
            <div className="about-page">
                <span className="text">
                    This is a Library containing all information relavant to the company Space X.
                </span>
                <span className="text">
                    Any information about Space X that you want to know, can be found here.
                </span>
                <span className="go-to-library" onClick={() => history.push("/homepage")}>
                    Go to the Wiki ›
                </span>
            </div>
        </Fragment>
    )
}

export default withRouter(About)