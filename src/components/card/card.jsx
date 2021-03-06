import React, { Fragment } from "react"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import "./card.css"

import { setData } from "../../redux/data/data-actions.js"


const Card = ({ data, history, setData, name }) => {

    const onClickFunction = () => {
        setData(data)
        history.push(`/${name}-information`)
    }

    return (
        <Fragment>
            <div className="card-border">
                <span onClick={onClickFunction}>{data.name || data.mission_name || data.full_name || data.id}</span>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data))
})

export default withRouter(connect(null, mapDispatchToProps)(Card));