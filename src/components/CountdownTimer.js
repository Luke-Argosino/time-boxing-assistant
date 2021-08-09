import React, { useState } from 'react';
import Bell from '../sounds/Bell.mp3'

const CountdownTimer = (props) => {
    const { minutes = 0, seconds = 60 } = props.hoursMinSecs;
    const [currentActivity, setCurrentActivity] = useState(props.activity);
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);
    const [onBreak, setOnBreak] = useState(true);
    const bell = new Audio(Bell);

    React.useEffect(() => {
        const timerCooldown = setInterval(() => tick(), 100);
        return () => clearInterval(timerCooldown);
    });

    const tick = () => {
        if (mins === 0 && secs === 0) {
            setOnBreak(!onBreak)
            setTimer()
        } else if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    }

    const setTimer = () => {
        if (props.sounds) {
            bell.play();
        }
        if (onBreak) {
            setCurrentActivity("Break")
            setTime([parseInt(props.breakTime), parseInt(seconds)]);
        } else {
            setCurrentActivity(props.activity)
            setTime([parseInt(props.interval), parseInt(seconds)]);
        }
    }

    return (
        <div className="CountdownTimer">
            <h1>
                {currentActivity} for
            </h1>
            <h1>
                {mins.toString().padStart(2, '0')}:
                {secs.toString().padStart(2, '0')}
            </h1>
        </div>
    )
}

export default CountdownTimer;