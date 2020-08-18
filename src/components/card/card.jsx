import React, { Fragment } from "react"
import { withRouter } from "react-router-dom"

import "./card.css"

import RocketsContext from "../../contexts/rockets/rockets-context.js"


const Card = ({ props, history }) => {

    return (
        <Fragment>
            {/* <RocketsContext.Provider value={props}> */}
            <div className="card-border">
                <span onClick={() => history.push("/information")}>{props.name}</span>
            </div>
            {/* </RocketsContext.Provider> */}
        </Fragment>
    )
}

export default withRouter(Card);