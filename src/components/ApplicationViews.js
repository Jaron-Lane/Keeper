import React from "react"
import { Route } from "react-router-dom"
import { HabitProvider } from "./habits/HabitProvider"
import { AllList } from "./habits/AllList"
import { TodayList } from "./habits/TodayList"


export const ApplicationViews = () => {
    return (
        <>
            <HabitProvider>
                <Route path="/todays_habits">
                    <TodayList />
                </Route>
            </HabitProvider>
            <HabitProvider>
                <Route path="/all_habits">
                    <AllList />
                </Route>
            </HabitProvider>
        </>
    )

}