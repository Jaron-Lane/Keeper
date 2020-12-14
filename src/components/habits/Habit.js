import React from "react"
import "./Habit.css"

export const Habit = ({ habit }) => {
    return (
        <article className="habit">
            <h3 className="habit__name">{ habit.name }</h3>
            <div className="habit__target">Target Time</div>
            <div className="habit__stopwatch">Hypothetical Stopwatch</div>
        </article>
    )
}