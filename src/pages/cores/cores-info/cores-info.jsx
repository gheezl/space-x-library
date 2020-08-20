import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../../redux/data/data-selectors.js"

import "../../rockets/rocket-info/info.css"

const InfoCard = lazy(() => import("../../../components/info-card/info-card.jsx"))

const CoresInfo = ({ data }) => {
    return (
        <Fragment>
            {
                data.data
                    ? (
                        <Fragment>
                            <h1 className="name">
                                {data.data.id}
                            </h1>
                            <div className="information">
                                <InfoCard info={data.data.status} name="Status" position="Left-column" />
                                <InfoCard info={data.data.original_launch} name="Original Launch" position="middle-column" />
                                <InfoCard info={data.data.reuse_count} name="Reuse Count" position="right-column" />
                                <InfoCard info={data.data.water_landing ? ("Had a water landing") : ("No water landing")} name="Water Landing" position="left-column-second-row" />
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

export default connect(mapStateToProps)(CoresInfo);