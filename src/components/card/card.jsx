import React, { Fragment, useContext } from "react"
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
                {
                    data.name
                        ? (
                            <span onClick={onClickFunction}>{data.name}</span>
                        )
                        : (
                            <span onClick={onClickFunction}>{data.mission_name || data.full_name}</span>
                        )
                }
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    setData: (data) => dispatch(setData(data))
})

export default withRouter(connect(null, mapDispatchToProps)(Card));