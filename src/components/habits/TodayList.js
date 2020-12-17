import React, { useContext, useEffect } from "react"
import { CompletedHabitContext } from "../completedhabits/CompHabitProvider"
import { HabitContext } from "./HabitProvider"
import { Habit } from "./Habit"
import { CompletedHabit } from "../completedhabits/CompletedHabit"


export const TodayList = (props) => {
    const { habits, getHabits } = useContext(HabitContext)
    const { compHabits, getCompHabits } = useContext(CompletedHabitContext)

    var d = new Date();
    var todaysDate = d.getDate();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var today = weekday[d.getDay()].toLowerCase();

    console.log(d)
    console.log("todays day is", today)
    console.log('todays date is the', todaysDate)


    useEffect(() => {
        // console.log("TodayList: Initial render before data")
        getHabits().then(getCompHabits)
        // console.log(habits)
    }, [])

    // Get user Id from local storage. Filter habits by user Id from local storage.
    const userId = parseInt(localStorage.getItem('app_user_id'))
    console.log(userId)


    return (
        <>
            <h1>Today's Habits</h1>
            <section className="habit__container">
                <article className="habits">
                    <h2>Habits To Do</h2>
                    <section className="habits__todo">
                        {
                            habits.filter(habit => habit.userId === userId && habit[today] === true)
                            .filter(habit => !compHabits.some(ch => ch.habitId === habit.id))
                                // *NOT* ANY HABIT ID FROM THE COMP HABIT DATABASE THAT EQUALS THE HABIT ID
                            .map(h => <Habit key={h.id} habit={h} {...props}/>)
                                // map over and get each habit in the habits array 
                        }
                    </section>
                </article>

                <article className="completed__habits">

                    <h2>Habits Completed Today</h2>
                    <section className="habits__completed">
                        {
                            compHabits.filter(habit => {
                                const testDate = new Date(habit.date)
                                return testDate.getDate() === todaysDate && habit.habit.userId === userId})
                            .map(todaysHabits => <CompletedHabit key={todaysHabits.id} completedHabit={todaysHabits} />)
                        }
                    </section>
                </article>
            </section>
        </>
    )
}