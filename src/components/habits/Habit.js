import React from "react"
import { Timer } from "./Timer"
import "./Habit.css"

export const Habit = ({ habit }) => {
    return (
        <article className="habit">
            <h3 className="habit__name">{ habit.name }</h3>
            <div className="habit__target">Try to hit { habit.time / 60 } minutes!</div>
            <Timer habit={ habit.id } />
        </article>
    )
}