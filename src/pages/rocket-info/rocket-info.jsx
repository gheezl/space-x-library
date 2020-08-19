import React, { Fragment, lazy, useContext } from "react"
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"

import { SelectData } from "../../redux/data/data-selectors.js"

import "./rocket-info.css"

const Wikipedia = lazy(() => import("../../components/wikipedia/wikipedia.jsx"))
const Description = lazy(() => import("../../components/description/description.jsx"))
const CostPerLaunch = lazy(() => import("../../components/cost-per-launch/cost-per-launch.jsx"))
const Country = lazy(() => import("../../components/country/country.jsx"))
const Diameter = lazy(() => import("../../components/diameter/diameter.jsx"))
const IsActive = lazy(() => import("../../components/is-active/is-active.jsx"))


const Info = ({ data }) => {
    console.log(data)
    return (
        <Fragment>
            <h1 className="name">
                {data.data.name}
            </h1>
            <div className="information">
                <Description description={data.data.description} />
                <Wikipedia wikipedia={data.data.wikipedia} />
                <CostPerLaunch costPerLaunch={data.data.cost_per_launch} />
                <Country country={data.data.country} />
                <Diameter diameter={data.data.diameter} />
                <IsActive isActive={data.data.active} />
            </div>
        </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    data: SelectData
})

export default connect(mapStateToProps)(Info);