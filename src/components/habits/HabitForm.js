import React, { useContext, useRef } from "react"
import { HabitContext } from "./HabitProvider"
import "./HabitForm.css"

export const HabitForm = (props) => {
    const { addHabit } = useContext(HabitContext)

    const name = useRef("")
    const time = useRef("")


    let sundayStatus = false;
    let mondayStatus = false;
    let tuesdayStatus = false;
    let wednesdayStatus = false;
    let thursdayStatus = false;
    let fridayStatus = false;
    let saturdayStatus = false;


    const makeNewHabit = (props) => {
        const userId = parseInt(localStorage.getItem('app_user_id'))

        if (name === "" || time === "") {
            window.alert("Please fill out all forms")
        }

        else {
            addHabit({
                name: name.current.value,
                time: time.current.value * 60,
                // multiplying time (coming in as seconds) by 60 for base number of seconds 
                userId,
                sunday: sundayStatus,
                monday: mondayStatus,
                tuesday: tuesdayStatus,
                wednesday: wednesdayStatus,
                thursday: thursdayStatus,
                friday: fridayStatus,
                saturday: saturdayStatus,
            }).then(() => props.history.push("/"))
        }
    }


    const sunday = (evt) => {
        // console.log(evt)
        return sundayStatus = evt.target.checked
    }
    const monday = (evt) => {
        // console.log(evt)
        return mondayStatus = evt.target.checked
    }
    const tuesday = (evt) => {
        // console.log(evt)
        return tuesdayStatus = evt.target.checked
    }
    const wednesday = (evt) => {
        // console.log(evt)
        return wednesdayStatus = evt.target.checked
    }
    const thursday = (evt) => {
        // console.log(evt)
        return thursdayStatus = evt.target.checked
    }
    const friday = (evt) => {
        // console.log(evt)
        return fridayStatus = evt.target.checked
    }
    const saturday = (evt) => {
        // console.log(evt)
        return saturdayStatus = evt.target.checked
    }


    return (
        <div className="habitForm__container">
            <form className="habitForm">
                <div className="habitForm__title">
                    <h2>Create A New Habit</h2>
                </div>
                <fieldset className="habitForm__name">
                    <label htmlFor="habitName">Habit Name: </label>
                    <input type="text" id="habitName" ref={name} placeholder="Read, Walk, etc." />
                </fieldset>
                <fieldset className="habitForm__checkbox">
                    <div className="checkbox">
                        <label htmlFor="sunday">Sunday </label>
                        <input type="checkbox" id="sundaySelect"
                            onChange={evt => {
                                sunday(evt)
                            }} />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="monday">Monday </label>
                        <input type="checkbox" id="mondaySelect"
                            onChange={evt => {
                                monday(evt)
                            }} />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="tuesday">Tuesday </label>
                        <input type="checkbox" id="tuesdaySelect"
                            onChange={evt => {
                                tuesday(evt)
                            }} />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="wednesday">Wednesday </label>
                        <input type="checkbox" id="wednesdaySelect"
                            onChange={evt => {
                                wednesday(evt)
                            }} />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="thursday">Thursday </label>
                        <input type="checkbox" id="thursdaySelect"
                            onChange={evt => {
                                thursday(evt)
                            }} />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="friday">Friday </label>
                        <input type="checkbox" id="fridaySelect"
                            onChange={evt => {
                                friday(evt)
                            }} />
                    </div>
                    <div className="checkbox">
                        <label htmlFor="saturday">Saturday </label>
                        <input type="checkbox" id="saturdaySelect"
                            onChange={evt => {
                                saturday(evt)
                            }} />
                    </div>
                </fieldset>
                <fieldset className="habitForm__minutes">
                    <label htmlFor="timeSelect">How much time (in minutes) would you like to spend daily? </label>
                    <input type="text" id="timeSelect" ref={time} placeholder="45, 30, 15, etc." />
                </fieldset>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        makeNewHabit(props)
                    }}
                    className="habitForm__btn">
                    Create!
            </button>
            </form>
        </div>
    )
}