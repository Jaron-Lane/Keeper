import React, { useState } from "react"

// Context is exported for any components that might need it 
export const CompletedHabitContext = React.createContext()

export const CompHabitProvider = (props) => {
    const [compHabits, setCompHabit] = useState([])

    const getCompHabits = () => {
        // console.log(compHabits)
        return fetch("http://localhost:8088/completedHabits")
        .then(res => res.json())
        .then(setCompHabit)
        
    }
    
    const addCompHabit = habit => {
        return fetch("http://localhost:8088/completedHabits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(habit)
        })
        .then(getCompHabits)
    }

    return (
        <CompletedHabitContext.Provider value={{
            compHabits, addCompHabit, getCompHabits
        }}>
            {props.children}
        </CompletedHabitContext.Provider>
    )
}