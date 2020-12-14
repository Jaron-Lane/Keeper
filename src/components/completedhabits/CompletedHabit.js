import React from "react"
import "./CompletedHabit.css"

export const CompletedHabit = ({ completedHabit }) => {
    return (
        <article className="habit__completed">
            <h3 className="habit__completed__congrat">Congratulations!</h3>
            <h4 className="habit__completed__name">You've completed {completedHabit.habitId.name}</h4>
            <h4 className="habit__completed__info">You've realized { completedHabit.elapsedTime } seconds/minutes of your goal</h4>
        </article>
    )
}