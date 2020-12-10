import React, { useState } from "react"

// Context is exported for any components that might need it 
export const AllHabitContext = React.createContext()

export const AllHabitProvider = (props) => {
    const { allHabits, setAllHabits } = useState([])

    const getAllHabits = () => {
        return fetch("http://localhost:8088/habits")
            .then(res => res.json())
            .then(setAllHabits)   
    }

    const addAllHabits = habit => {
        return fetch("http://localhost:8088/habits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habit)
        })
            .then(getAllHabits)
    }

    return (
        <AllHabitContext.Provider value={{
            allHabits, addAllHabits, getAllHabits
        }}>
            {props.children}
        </AllHabitContext.Provider>
    )
}