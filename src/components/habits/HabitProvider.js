import React, { useState } from "react"

// Context is exported for any components that might need it 
export const HabitContext = React.createContext()

export const HabitProvider = (props) => {
    const { habits, setHabit } = useState([])

    const getHabit = () => {
        return fetch("http://localhost:8088/habits")
            .then(res => res.json())
            .then(setHabit)   
    }

    const addHabit = habit => {
        return fetch("http://localhost:8088/habits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habit)
        })
            .then(getHabit)
    }

    return (
        <HabitContext.Provider value={{
            habits, addHabit, getHabit
        }}>
            {props.children}
        </HabitContext.Provider>
    )
}