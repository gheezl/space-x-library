import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "../rocket-info/info.css"

const InfoCard = lazy(() => import("../../components/info-card/info-card.jsx"))

const LandPadsInfo = ({ data }) => {
    console.log(data)
    return (
        <Fragment>
            {
                data.data
                    ? (
                        <Fragment>
                            <h1 className="name">
                                {data.data.full_name}
                            </h1>
                            <div className="information">
                                <InfoCard info={data.data.full_name} name="Name" position="middle-column" />
                                <InfoCard info={data.data.details} name="Description" position="left-column" />
                                <InfoCard info={data.data.location.region} name="Location" position="right-column" />
                                <InfoCard info={data.data.successful_landings} name="Successful Landings" position="left-column-third-row" />
                                <InfoCard link={data.data.wikipedia} name="Wikipedia" position="middle-column-second-row" />
                                <InfoCard info={data.data.status} name="Status" position="right-column-second-row" />
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

export default connect(mapStateToProps)(LandPadsInfo);