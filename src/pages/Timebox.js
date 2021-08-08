import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';

export default function Timebox(props) {
    const history = useHistory();
    console.log(history.location.state.activity.value)
    console.log(history.location.state.breakTime.value)
    console.log(history.location.state.interval.value)

    const handleClick = (e) => {
        e.preventDefault()
        history.push('/')
    }

    return (
        <div className="Timebox">
            <h1>
                {history.location.state.activity.value}
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