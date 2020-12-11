import React, { useContext, useEffect } from "react"
import { AllHabitCard } from "./AllHabitCard"
import { HabitContext } from "./HabitProvider"


export const AllList = (props) => {
    const {habits, getHabits} = useContext(HabitContext)

    useEffect(() => {
        console.log("AllList: Initial render before data")
        getHabits()
        console.log(habits)
    }, [])

    useEffect(() => {
        console.log(habits)
    }, [habits])

    // console.log(HabitProvider)
    return (
        <>
            <h1>All of my Habits</h1>
            <section className="habits">
                {
                    habits.map(h => <AllHabitCard key={h.id} habit={h}/>)
                }
            </section>
        </>
    )
}