import React, { useState, useEffect, useContext } from "react";
import { CompletedHabitContext } from "../completedhabits/CompHabitProvider"
import "./Timer.css"

export const Timer = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const { addCompHabit } = useContext(CompletedHabitContext)
    const completedDate = Date()    
    let timeSubmitted = seconds
    
    const submitHabit = () => {
        console.log(timeSubmitted)
        addCompHabit({
            habitId: props.habit, 
            elapsedTime: timeSubmitted,
            date: completedDate
        })
    }
    
    const toggle = () => {
        setIsActive(!isActive);
    }

    const timeDisplay = () => {
        const getSeconds = `0${(seconds % 60)}`.slice(-2);
        const minutes = `${Math.floor(seconds / 60)}`;
        const getMinutes = `0${(minutes % 60)}`.slice(-2)

        return `${getMinutes}:${getSeconds}`
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            // if isActive is true, then have setSeconds increment by 1 every 1000 milliseconds
            // setInterval takes 2 parameters: a callback and time in milliseconds
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            // clearInterval stops setInterval. In this case, it stops interval from incrementing
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    // console.log(props)
    return (
        <div className="habit__timer">
            <div className="habit__time">
                {timeDisplay()}
            </div>
            <div className="start__pause">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="submit" onClick={submitHabit}>
                    Submit Time
                </button>
            </div>
        </div>
    );
};
