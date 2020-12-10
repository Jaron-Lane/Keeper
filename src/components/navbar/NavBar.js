import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/create">Create</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/todays_goals">Today's Goals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/all_goals">All Goals</Link>
            </li>
        </ul>
    )
}