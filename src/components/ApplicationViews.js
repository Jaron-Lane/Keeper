import React from "react"
import { Route } from "react-router-dom"
import { HabitProvider } from "./habits/HabitProvider"
import { AllList } from "./habits/AllList"


export const ApplicationViews = () => {
    return (
        <>
            <HabitProvider>
                <Route path="/all_habits">
                    <AllList />
                </Route>
            </HabitProvider>
        </>
    )

}