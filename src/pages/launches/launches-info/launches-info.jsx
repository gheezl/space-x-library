import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../../redux/data/data-selectors.js"

import "../../rockets/rocket-info/info.css"

const InfoCard = lazy(() => import("../../../components/info-card/info-card.jsx"))

const LaunchInfo = ({ data }) => {
    console.log(data)
    return (
        <Fragment>
            {
                data.data
                    ? (
                        <Fragment>
                            <h1 className="name">
                                {data.data.name}
                            </h1>
                            <div className="information">
                                <InfoCard info={data.data.details ? (data.data.details) : ("No description availiable")} name="Description" position="left-column" />
                                <InfoCard info={data.data.launch_success ? ("Was a success") : ("Was a failure")} name="Launch Success" position="middle-column" />
                                <InfoCard info={data.data.mission_name} name="Mission Name" position="right-column" />
                                <InfoCard info={data.data.launch_year} name="Mission Year" position="left-column-second-row" />
                                <InfoCard info={data.data.rocket.rocket_name} name="Rocket Used" position="middle-column-second-row" />
                            </div>
                        </Fragment>
                    )
                    : (
                        null
                    )
            }

        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    data: SelectData
})

export default connect(mapStateToProps)(LaunchInfo);