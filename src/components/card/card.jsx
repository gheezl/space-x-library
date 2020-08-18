import React, { Fragment } from "react"
import { withRouter } from "react-router-dom"

import "./card.css"


const Card = ({ props, history }) => {
    return (
        <Fragment>
            <div className="card-border">
                <span onClick={() => history.push("/information")}>{props}</span>
            </div>
        </Fragment>
    )
}

export default withRouter(Card);