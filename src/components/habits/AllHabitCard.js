import React from "react"
import "./AllHabitCard.css"

export const AllHabitCard = ({ habit }) => {
    return (
    <article className="habit">
        <h3 className="habit__name">{ habit.name }</h3>
        <div className="habit__specs">Habit days and daily times</div>
    </article>
    )
}