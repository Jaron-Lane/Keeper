import React from "react"
import { Route } from "react-router-dom"
import { CreateProvider } from "./create/CreateProvider"
import { CreateForm } from "./create/CreateForm"
import { TodaysHabitProvider } from "./todayshabit/TodaysHabitProvider"
import { TodaysHabitList } from "./todayshabit/TodaysHabitList"
import { AllHabitProvider } from "./allhabits/AllHabitProvider"
import { AllHabitList } from "./allhabits/AllHabitList"


export const ApplicationViews = () => {
    return (
        <>
<h1>This is applicationviews </h1> 
            {/* <CreateProvider>
                <Route exact path="/create">
                    <CreateForm />
                </Route>
            </CreateProvider>

            <TodaysHabitProvider>
                <Route path="/todays_habits">
                    <TodaysHabitList />
                </Route>
            </TodaysHabitProvider>

            <AllHabitProvider>
                <Route path="/all_habits">
                    <AllHabitList />
                </Route>
            </AllHabitProvider> */}

        </>
    )

}