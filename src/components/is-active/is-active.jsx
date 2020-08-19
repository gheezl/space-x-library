import React, { Fragment } from "react"

import "./is-active.css"

const IsActive = ({ isActive }) => {
    console.log(isActive)
    return (
        <Fragment>
            <div className="left-column-second-row">
                <h2 className="title">Active</h2>
                {
                    isActive
                        ? (
                            <div className="is-active">
                                <span>Is active</span>
                            </div>
                        )
                        : (
                            <div className="is-active" >
                                <span>No longer active</span>
                            </div>
                        )
                }
            </div>
        </Fragment >
    )
}

export default IsActive;