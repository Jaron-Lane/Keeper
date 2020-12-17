import React, {useContext} from "react"
import "./AllHabitCard.css"
import { HabitContext } from "./HabitProvider"


export const AllHabitCard = ({ props, habit }) => {
    const { deleteHabit } = useContext(HabitContext)

    return (
        <article className="habit">
            <h3 className="habit__name">{habit.name}</h3>
            <div className="habit__specs">{habit.time / 60} minutes as your goal</div>
            <button className="btn--release"
                onClick={() => {
                    deleteHabit(habit.id)
                    .then(() => {
                        props.history.push("/all_habits")
                    })
                }}>Delete</button>
        </article>
    )
}