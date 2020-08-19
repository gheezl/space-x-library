import React, { Fragment, lazy } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "../rocket-info/info.css"

const Wikipedia = lazy(() => import("../../components/wikipedia/wikipedia.jsx"))
const Description = lazy(() => import("../../components/description/description.jsx"))
const InfoCard = lazy(() => import("../../components/info-card/info-card.jsx"))


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
                                <Description description={data.data.details} />
                                <InfoCard link={data.data.wikipedia} name="Wikipedia" position="middle-column" />
                                <InfoCard info={data.data.successful_launches} name="Successful Launches" position="right-column" />
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