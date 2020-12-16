import React, { useRef } from "react"

export const HabitForm = () => {
    const name = useRef(null)

    let sundayStatus = false;
    let mondayStatus = false;
    let tuesdayStatus = false;
    let wednesdayStatus = false;
    let thursdayStatus = false;
    let fridayStatus = false;
    let saturdayStatus = false;

    const sunday = (evt) => {
        console.log(evt)
        return sundayStatus = evt.target.checked
    }
    const monday = (evt) => {
        console.log(evt)
        return mondayStatus = evt.target.checked
    }
    const tuesday = (evt) => {
        console.log(evt)
        return tuesdayStatus = evt.target.checked
    }
    const wednesday = (evt) => {
        console.log(evt)
        return wednesdayStatus = evt.target.checked
    }
    const thursday = (evt) => {
        console.log(evt)
        return thursdayStatus = evt.target.checked
    }
    const friday = (evt) => {
        console.log(evt)
        return fridayStatus = evt.target.checked
    }
    const saturday = (evt) => {
        console.log(evt)
        return saturdayStatus = evt.target.checked
    }


    return (
        <form className="habitForm">
            <h2>Create A New Habit</h2>
            <fieldset>
                <label htmlFor="habitTitle">Habit Title</label>
                <input type="text" id="habitName" ref={name} placeholder="Workout, Read, Walk, etc." />
            </fieldset>
            <fieldset>
                <label htmlFor="sunday">Sunday </label>
                <input type="checkbox" id="sundaySelect" 
                onChange={evt => {
                    sunday(evt)
                }}/>
                <label htmlFor="monday">Monday </label>
                <input type="checkbox" id="mondaySelect" 
                onChange={evt => {
                    monday(evt)
                }}/>
                <label htmlFor="tuesday">Tuesday </label>
                <input type="checkbox" id="tuesdaySelect" 
                onChange={evt => {
                    tuesday(evt)
                }}/>
                <label htmlFor="wednesday">Wednesday </label>
                <input type="checkbox" id="wednesdaySelect" 
                onChange={evt => {
                    wednesday(evt)
                }}/>
                <label htmlFor="thursday">Thursday </label>
                <input type="checkbox" id="thursdaySelect" 
                onChange={evt => {
                    thursday(evt)
                }}/>
                <label htmlFor="friday">Friday </label>
                <input type="checkbox" id="fridaySelect" 
                onChange={evt => {
                    friday(evt)
                }}/>
                <label htmlFor="saturday">Saturday </label>
                <input type="checkbox" id="saturdaySelect" 
                onChange={evt => {
                    saturday(evt)
                }}/>
            </fieldset>
        </form>
    )
}