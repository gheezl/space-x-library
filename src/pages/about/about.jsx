import React, { Fragment } from "react"
import { withRouter } from "react-router-dom"

import "./about.css"


const About = ({ history }) => {
    return (
        <Fragment>
            <div>
                <span>
                    Hi welcome to the Space X Library
                </span>
                <span onClick={() => history.push("/homepage")}>
                    Go to the Library
                </span>
            </div>
        </Fragment>
    )
}

export default withRouter(About)