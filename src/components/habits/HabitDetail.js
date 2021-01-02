    import React, { useContext, useEffect, useState } from 'react'
    import './Habit.css'
    import { HabitContext } from './HabitProvider'
    // import { CompletedHabitContext } from '../completedhabits/CompHabitProvider'

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
            <section className="details">
                <h3 className="details__name">{habit.name}</h3>
                <div className="details__container">
                    <div className="details__time">{habit.time / 60} minutes a day</div>
                    <div className="details__schedule">
                        <ul>
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
                </div>
                <button className="btn--release"
                onClick={() => {
                    deleteHabit(habit.id)
                    .then(() => {
                        props.history.push("/")
                    })
                }}>Delete Habit</button>
            </section>
        )
    }