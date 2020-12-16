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
    
    function toggle() {
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    // console.log(props)
    return (
        <div className="habit__timer">
            <div className="habit__time">
                {seconds}s
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
