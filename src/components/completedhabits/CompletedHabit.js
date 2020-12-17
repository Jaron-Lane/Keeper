import React, { useContext } from "react"
import "./CompletedHabit.css"

export const CompletedHabit = ({ completedHabit }) => {
    const minutes = Math.floor(completedHabit.elapsedTime / 60);
    const seconds = completedHabit.elapsedTime % 60 

    return (
        <article className="habit__completed">
            <h3 className="habit__completed__congrat">Congratulations!</h3>
            <h5 className="habit__completed__name">You've completed { completedHabit.habit.name }</h5>
            <h5 className="habit__completed__info">You've realized {minutes} minute(s) and {seconds} second(s) of your goal</h5>
        </article>
    )
}