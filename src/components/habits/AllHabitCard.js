import React from "react"
import "./AllHabitCard.css"

export const AllHabitCard = () => {
    return (
    <article className="habit">
        <h3 className="habit__name">Habit Title</h3>
        <h5 className="habit__description">Short habit description</h5>
        <div className="habit__specs">Habit days and daily times</div>
    </article>
    )
}