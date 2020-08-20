import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../../redux/data/data-selectors.js"

import "../../rockets/rocket-info/info.css"

const InfoCard = lazy(() => import("../../../components/info-card/info-card.jsx"))

const CapsulesInfo = ({ data }) => {
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
                                <InfoCard info={data.data.dragon.name} name="Dragon Used" position="Left-column" />
                                <InfoCard info={data.data.status} name="Status" position="middle-column" />
                                <InfoCard info={data.data.landings} name="Landings" position="right-column" />
                                <InfoCard info={data.data.original_launch} name="Original Launch" position="left-column-second-row" />
                                <InfoCard info={data.data.reuse_count} name="Reuse Count" position="middle-column-second-row" />
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

export default connect(mapStateToProps)(CapsulesInfo);