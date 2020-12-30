import React from "react"
import { Route } from "react-router-dom"
import { HabitProvider } from "./habits/HabitProvider"
import { AllList } from "./habits/AllList"
import { TodayList } from "./habits/TodayList"
import { CompHabitProvider } from "./completedhabits/CompHabitProvider"
import { HabitForm } from "./habits/HabitForm"
import { HabitDetail } from "./habits/HabitDetail"


export const ApplicationViews = (props) => {
    return (
        <>  
            <HabitProvider>
                <Route path="/create">
                    <HabitForm {...props}/>
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
                <Route exact path="/" render={
                    props => <AllList {...props}/>
                } />   

                <Route path="/:habitId(\d+)" render={
                    props => <HabitDetail {...props} />
                } />
            </HabitProvider>
        </>
    )

}