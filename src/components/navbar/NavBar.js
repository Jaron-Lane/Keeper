import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"
// ^ import Link 

export const NavBar = (props) => {
    return (
        // Use <Link> to create links to new URL
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/create">Create</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/todays_habits">Today's Habits</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/all_habits">All Habits</Link>
            </li>
        </ul>
    )
}