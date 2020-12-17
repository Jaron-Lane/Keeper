import React, { useContext, useEffect } from "react"
import { AllHabitCard } from "./AllHabitCard"
import { HabitContext } from "./HabitProvider"


export const AllList = (props) => {
    const { habits, getHabits } = useContext(HabitContext)


    useEffect(() => {
        console.log("AllList: Initial render before data")
        getHabits()
        // console.log(habits)
    }, [])

    // sets userId equal to the app_user_id from local storage. Also, converting it to an int from a string
    const userId = parseInt(localStorage.getItem('app_user_id'))

    return (
        <>
            <h1>All of my Habits</h1>
            <section className="habits">
                {
                    // filter over all the habits and get the ones where the habit's userId matches the user's id
                    habits.filter(habit => habit.userId === userId).map(habit => {
                        return (
                            <>
                                <AllHabitCard key={habit.id} habit={habit} props={props}/>
                            </>
                        )
                    }) 
                    } 
            </section>
        </>
    )
}