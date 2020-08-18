import React, { Fragment } from 'react';
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"
import { useMutation } from '@apollo/react-hooks'

import './homepage.css';

import { client, cache } from "../../graphql/client.js"


const HomePage = () => {
    const query = gql`
        query cache {
            toggleLibrary
        }
    `

    const { toggleLibrary } = client.readQuery({ query })

    const TOGGLE_LIBRARY_CHANGE = gql`
        mutation ToggleLibraryChange {
            toggleLibraryChange @client
        }
    `


    const onClickFunction = () => {
        cache.modify({
            id: cache.identify(toggleLibrary),
            fields: {
                name(toggleLibrary) {
                    return !toggleLibrary
                }
            }
        })
    }

    const [libraryChange, { data }] = useMutation(TOGGLE_LIBRARY_CHANGE)

    return (
        <Fragment>
            {
                toggleLibrary
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
                            <span onClick={libraryChange}>
                                Go to Library
                            </span>
                        </div>
                    )
            }

        </Fragment>
    )
}

export default HomePage;