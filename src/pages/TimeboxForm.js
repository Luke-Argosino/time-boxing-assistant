import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField } from '@material-ui/core';

const TimeboxForm = () => {
    const [activity, setActivity] = useState("Code")
    const [breakTime, setBreakTime] = useState(5)
    const [interval, setInterval] = useState(15)
    const [sounds, toggleSounds] = useState(false)

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(activity, " ", breakTime, " ", interval)
        if  (!activity || !breakTime || !interval) {
            alert("Please ensure no fields are empty")
        } else {
            history.push({
                pathname: '/timebox',
                state: {
                    activity: activity,
                    breakTime: breakTime,
                    interval: interval,
                    sounds: sounds
                }
            })
        }
    }

    return (   
        <div className="Body">
            <form className="timeboxForm" autoComplete="off" noValidate onSubmit={handleSubmit}>
                <div>
                    I want to  
                    <TextField 
                        onChange={(e) => setActivity(e.target.value)}
                        id="Activity" 
                        type="default" 
                        defaultValue="Code"
                        style = {{width: 120}} 
                        inputProps={{style: { textAlign: 'center' }}} 
                        required
                    />
                    with
                    <TextField 
                        onChange={(e) => setBreakTime(e.target.value)}
                        id="break" 
                        type="number" 
                        defaultValue={5}
                        style={{width: 60}} 
                        inputProps={{min: 1, style: { textAlign: 'center' }}} 
                        required
                    />
                    minute breaks every
                    <TextField 
                        onChange={(e) => setInterval(e.target.value)}
                        id="interval" 
                        type="number" 
                        defaultValue={15}
                        style = {{width: 60}} 
                        inputProps={{min: 1, style: { textAlign: 'center' }}} 
                        required
                    />
                    minutes.
                </div>
                <div className="Checkbox">
                    <FormControlLabel 
                        onChange={(e) => toggleSounds(e.target.value)}
                        control={<Checkbox color="default" />}
                        label="Notification sound"
                    />
                </div>
                    <Button id="StartStopButton" 
                        type="submit"
                        variant="contained"
                    >
                        Go
                    </Button>
            </form>
        </div>
    );
}

export default TimeboxForm;