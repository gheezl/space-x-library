import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../../redux/data/data-selectors.js"

import "../../rockets/rocket-info/info.css"

const InfoCard = lazy(() => import("../../../components/info-card/info-card.jsx"))

const LaunchPadsInfo = ({ data }) => {
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
                                <InfoCard info={data.data.details} name="Description" position="left-column" />
                                <InfoCard link={data.data.wikipedia} name="Wikipedia" position="middle-column" />
                                <InfoCard info={data.data.successful_launches} name="Launches" position="right-column" />
                                <InfoCard info={data.data.status} name="Status" position="left-column-second-row" />
                                <InfoCard info={data.data.location.region} name="Location" position="middle-column-second-row" />
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

export default connect(mapStateToProps)(LaunchPadsInfo);