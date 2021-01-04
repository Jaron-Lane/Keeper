import React, { useContext, useEffect, useState } from 'react'
// import './Habit.css'
import { HabitContext } from './HabitProvider'
import "./HabitDetail.css"

export const HabitDetail = (props) => {
    const { habits, getHabits, deleteHabit } = useContext(HabitContext)
    // const { compHabits, getCompHabits } = useContext(CompletedHabitContext)

    console.log(habits)

    const [habit, setHabit] = useState({})

    useEffect(() => {
        getHabits()
    }, [])

    useEffect(() => {
        const habit = habits.find(h => h.id === parseInt(props.match.params.habitId)) || {}
        setHabit(habit)
    }, [habits])



    return (
        <div className="details__container">
            <div className="details">
                <h3 className="details__name">{habit.name}</h3>
                <div className="details__time">{habit.time / 60} minutes a day</div>
                <div className="details__info">
                    <ul className="details__schedule">
                        {
                            habit.sunday ? <li>Sunday</li> : ""
                        }
                        {
                            habit.monday ? <li>Monday</li> : ""
                        }
                        {
                            habit.tuesday ? <li>Tuesday</li> : ""
                        }
                        {
                            habit.wednesday ? <li>Wednesday</li> : ""
                        }
                        {
                            habit.thursday ? <li>Thursday</li> : ""
                        }
                        {
                            habit.friday ? <li>Friday</li> : ""
                        }
                        {
                            habit.saturday ? <li>Saturday</li> : ""
                        }
                    </ul>
                </div>
                <button className="detail__delete"
                    onClick={() => {
                        deleteHabit(habit.id)
                            .then(() => {
                                props.history.push("/")
                            })
                    }}>Delete Habit</button>
            </div>
        </div>
    )
}