import React from "react"
import { Route } from "react-router-dom"
import { CreateProvider } from "./create/CreateProvider"
import { CreateForm } from "./create/CreateForm"
import { TodaysHabitProvider } from "./todayshabit/TodaysHabitProvider"
import { TodaysHabitList } from "./todayshabit/TodaysHabitList"
import { HabitProvider } from "./allhabits/HabitProvider"
import { HabitList } from "./allhabits/HabitList"


export const ApplicationViews = () => {
    return (
        <>

            <CreateProvider>
                {/* Render the create form when http://localhost:3000/create */}
                <Route exact path="/create">
                    <CreateForm />
                </Route>
            </CreateProvider>

            <TodaysHabitProvider>
                <Route path="/todays_habits">
                    <TodaysHabitList />
                </Route>
            </TodaysHabitProvider>

            <HabitProvider>
                <Route path="/all_habits">
                    <HabitList />
                </Route>
            </HabitProvider>

        </>
    )

}