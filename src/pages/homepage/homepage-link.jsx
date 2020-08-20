import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom"

import './homepage.css';

const HomePageLink = ({ toggle, setToggle, name }) => {

    const test = `/${name.toLowerCase()}`
    return (
        <Fragment>
            <div className="link">
                <Link to={test} >
                    <span onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)}>{name} ☷</span>
                </Link>
                {toggle
                    ? (<div className="drop-down">
                        <span>
                            All of the Space X {name.toLowerCase()}
                        </span>
                    </div>)
                    : (null)}
            </div>
        </Fragment>
    )
}

export default HomePageLink;