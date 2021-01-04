import React from "react"
import "./NavBar.css"
import { Link } from "react-router-dom"
// ^ import Link 

export const NavBar = (props) => {
    return (
        <div className="navBar__container">
            <h2 className="logo_title">Keeper</h2>
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/create">Create</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/todays_habits">Today's Habits</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">Library</Link>
                </li>
            </ul>
        </div>
    )
}