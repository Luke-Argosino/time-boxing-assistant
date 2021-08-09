import React, { useState } from 'react';
import CountdownTimer from '../CountdownTimer';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';

const Timebox = (props) => {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault()
        history.push('/')
    }

    const hoursMinSecs = {minutes: history.location.state.interval.value, seconds: 0}

    return (
        <div className="Timebox">
            <h1 id="activity">
                {history.location.state.activity.value} for
            </h1>
            <h1>
                <CountdownTimer 
                    hoursMinSecs={hoursMinSecs}
                    breakTime={history.location.state.breakTime.value} 
                    interval={history.location.state.interval.value}
                    sounds={history.location.state.sounds.value}
                />
            </h1>
            <Button id="StartStopButton" 
                type="submit"
                variant="contained"
                onClick={handleClick}
            >
                Finish
            </Button>
        </div>
    )
}

export default Timebox;