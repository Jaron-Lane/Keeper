import React, { useState, useEffect } from "react";
import "./Timer.css"

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    // function reset() {
    //   setSeconds(0);
    //   setIsActive(false);
    // }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            let time = {
                seconds: seconds,
                userId: 1
            }
            console.log(time)
            // console log an object with a key of seconds and another key with a user id of 1 ^^^
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">
                {seconds}s
      </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Log' : 'Start'}
                </button>

            </div>
        </div>
    );
};
