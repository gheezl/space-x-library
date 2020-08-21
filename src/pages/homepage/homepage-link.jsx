import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom"

import './homepage.css';

const HomePageLink = (name) => {
    let [toggle, setToggle] = useState(false)

    const link = `/${name.name.toLowerCase()}`
    return (
        <Fragment>
            <div className="link">
                <Link to={link} >
                    <span onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)}>{name.name} </span>
                </Link>
                {toggle
                    ? (<div className="drop-down">
                        <span>
                            All of the Space X {name.name.toLowerCase()}
                        </span>
                    </div>)
                    : (null)}
            </div>
        </Fragment>
    )
}

export default HomePageLink;