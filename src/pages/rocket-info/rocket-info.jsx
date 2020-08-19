import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "./info.css"

const InfoCard = lazy(() => import("../../components/info-card/info-card.jsx"))


const RocketInfo = ({ data }) => {
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
                                <InfoCard info={data.data.description} name="Description" position="left-column" />
                                <InfoCard link={data.data.wikipedia} name="Wikipedia" position="middle-column-second-row" />
                                <InfoCard info={`${data.data.cost_per_launch} USD`} name="Cost Per Launch" position="middle-row" />
                                <InfoCard info={data.data.country} name="Nation" position="right-row" />
                                <InfoCard info={`${data.data.diameter.meters} meters`} name="Diameter" position="right-row-second-column" />
                                <InfoCard info={data.data.active ? ("is active") : ("is not active")} name="Active" position="left-column-second-row" />
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

export default connect(mapStateToProps)(RocketInfo);