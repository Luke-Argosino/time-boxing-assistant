import React, { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';

const Timebox = (props) => {
    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault()
        history.push('/')
    }

    const hoursMinSecs = {minutes: history.location.state.interval, seconds: 0}

    return (
        <div className="Timebox">
            <div>
                <CountdownTimer 
                    activity={history.location.state.activity}
                    breakTime={history.location.state.breakTime} 
                    interval={history.location.state.interval}
                    sounds={history.location.state.sounds}
                    hoursMinSecs={hoursMinSecs}
                />
            </div>
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