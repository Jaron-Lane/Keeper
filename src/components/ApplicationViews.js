import React from "react"
import { Route } from "react-router-dom"
import { HabitProvider } from "./habits/HabitProvider"
import { AllList } from "./habits/AllList"
import { TodayList } from "./habits/TodayList"
import { CompHabitProvider } from "./completedhabits/CompHabitProvider"


export const ApplicationViews = () => {
    return (
        <>  
            <HabitProvider>
                <Route exact path="/create">
                    <HabitForm />
                </Route>
            </HabitProvider>
            <CompHabitProvider>
                <HabitProvider>
                    <Route path="/todays_habits">
                        <TodayList />
                    </Route>
                </HabitProvider>
            </CompHabitProvider>
            <HabitProvider>
                <Route path="/all_habits" render={
                    props => <AllList {...props}/>
                } />   
            </HabitProvider>
        </>
    )

}