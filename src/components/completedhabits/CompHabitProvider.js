import React, { useState } from "react"

// Context is exported for any components that might need it 
export const CompletedHabitContext = React.createContext()

export const CompHabitProvider = (props) => {
    const [compHabits, setCompHabit] = useState([])

    const getCompHabits = () => {
        // Adding /?_expand=habit to create nested data. Makes displaying the completedhabit.name from CompletedHabit easier!
        return fetch("http://localhost:8088/completedHabits/?_expand=habit")
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