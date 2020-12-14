import React from "react"
import { Timer } from "./Timer"
import "./Habit.css"

export const Habit = ({ habit }) => {
    return (
        <article className="habit">
            <h3 className="habit__name">{ habit.name }</h3>
            <div className="habit__target">Target Time</div>
            <Timer />
        </article>
    )
}