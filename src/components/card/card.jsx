import React, { Fragment, useState } from "react"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import "./card.css"

import { setData } from "../../redux/data/data-actions.js"


const Card = ({ data, history, setData }) => {
    console.log(data)
    const onClickFunction = (data) => {
        setData(data)
        history.push("/information")
    }

    return (
        <Fragment>
            <div className="card-border">
                <span onClick={onClickFunction}>{data.name}</span>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data))
})

export default withRouter(connect(null, mapDispatchToProps)(Card));