import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"

import './homepage.css';

import { client } from "../../graphql/client.js"


const HomePage = () => {
    const query = gql`
        query data {
            toggleLibrary
        }
    `


    const toggle = client.readQuery({ query })
    return (
        <Fragment>
            {
                toggle.toggleLibrary
                    ?
                    (
                        <div className="links">
                            <div className="link">
                                <Link to="/rockets" >
                                    <span>Rockets</span>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/missions" >
                                    <span>Missions</span>
                                </Link>
                            </div>
                        </div>
                    )
                    : (
                        <div className="welcome">
                            <span >
                                Welcome to the Space X Library.
                            </span>
                            <span>
                                Go to Library
                            </span>
                        </div>
                    )
            }

        </Fragment>
    )
}

export default HomePage;