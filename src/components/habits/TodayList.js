import React, { useContext, useEffect } from "react"
import { CompletedHabitContext } from "../completedhabits/CompHabitProvider"
import { HabitContext } from "./HabitProvider"
import { Habit } from "./Habit"
import { CompletedHabit } from "../completedhabits/CompletedHabit"


export const TodayList = (props) => {
    const { habits, getHabits } = useContext(HabitContext)
    const { compHabits, getCompHabits } = useContext(CompletedHabitContext)

    useEffect(() => {
        // console.log("TodayList: Initial render before data")
        getHabits().then(getCompHabits)
        console.log(habits)
    }, [])

    // useEffect(() => {
    //     getCompHabits()
    //     console.log(compHabits)
    // }, [])

    return (
        <>
            <h1>Today's Habits</h1>
            <section className="habit__container">
                <article className="habits">
                    <h2>Habits To Do Today</h2>
                    <section className="habits__todo">
                        {
                            habits.map(h => <Habit key={h.id} habit={h} />)
                        }
                    </section>
                </article>

                <article className="completed__habits">
                    
                    <h2>Habits Completed Today</h2>
                    <section className="habits__completed">
                        { console.log(compHabits) }
                        
                        {
                            compHabits.map(comp => <CompletedHabit key={comp.id} completedHabit={comp} />)
                        }
                    </section>
                </article>
            </section>
        </>
    )
}