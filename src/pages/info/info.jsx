import React, { Fragment } from "react"
import { gql } from "apollo-boost"

import "./info.css"

import { client } from "../../graphql/client.js"

const Info = ({ props }) => {
    const query = gql`
        query cache {
            rockets
        }
    `

    const { rocketsData } = client.readQuery({ query })

    console.log(rocketsData)
    return (
        <Fragment>
            <div className="information">
                <h2 className="description-title">Description</h2>
                <div className="description">
                    <span>
                        The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009.
                        On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
                 </span>
                </div>
                <div className="wikipedia-link">
                    <a href={"https://en.wikipedia.org/wiki/Falcon_1"}>wikipedia page</a>
                </div>
            </div>
        </Fragment>
    )
}


export default Info;