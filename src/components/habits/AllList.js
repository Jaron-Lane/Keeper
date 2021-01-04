import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
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
            <div className="todays__habits">
                <h1>Library</h1>
            </div>
            <div className="allHabit__container">
                
                    {
                        // filter over all the habits and get the ones where the habit's userId matches the user's id
                        habits.filter(habit => habit.userId === userId).map(habit => {
                            return <Link className="allHabit__cards" key={habit.id} to={`/${habit.id}`} props={props}>
                                <h2>{habit.name}</h2>
                            </Link>
                        }
                        )}
                
            </div>
        </>
    )
}