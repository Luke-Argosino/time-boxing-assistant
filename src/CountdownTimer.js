import React, { useState } from 'react';

const CountdownTimer = (props) => {
    const breakMinutes = props.breakMinutes
    const interval = props.interval

    const { minutes = 0, seconds = 60 } = props.hoursMinSecs;
    const [[mins, secs], setTime] = React.useState([minutes, seconds]);
    const [onBreak, setOnBreak] = useState()

    console.log(breakMinutes, " ", interval)

    const tick = () => {
        if (mins === 0 && secs === 0) {
            setOnBreak(!onBreak)
            setTimer()
        }
        if (secs === 0) {
            setTime([mins - 1, 59]);
        } else {
            setTime([mins, secs - 1]);
        }
    }

    const setTimer = () => {
        if (onBreak) {
            console.log(breakMinutes)
            setTime([parseInt(breakMinutes), parseInt(seconds)]);
        } else {
            console.log(minutes)
            setTime([parseInt(minutes), parseInt(seconds)]);
        }
    }
    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div className="CountdownTimer">
            <h1>
                {mins.toString().padStart(2, '0')}:
                {secs.toString().padStart(2, '0')}
            </h1>
        </div>
    )
}

export default CountdownTimer;