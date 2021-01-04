import React from "react"
import { Timer } from "./Timer"
import "./Habit.css"


export const Habit = ({ habit }) => {
    return (
        <div id="habit__card__id">
            <h3 className="habitCard__name">{ habit.name }</h3>
            <p className="habitCard__info">Try to hit { habit.time / 60 } minutes!</p>
            <Timer habit={ habit.id } />
        </div>
    )
}