import './TimeboxForm.css';
import { Button } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

export default function TimeboxForm() {
    const classes = useStyles()

    return (   
        <div className="Body">
            <form className="timeboxForm" autoComplete="off" noValidate>
                <div>
                    I want to  
                    <TextField 
                        id="Activity" 
                        type="default" 
                        defaultValue="Code" 
                        style = {{width: 120}} 
                        inputProps={{style: { textAlign: 'center' }}} 
                        required
                    />
                    with
                    <TextField 
                        id="break" 
                        type="number" 
                        defaultValue="5"
                        style={{width: 60}} 
                        inputProps={{min: 1, style: { textAlign: 'center' }}} 
                        required
                    />
                    minute breaks every
                    <TextField 
                        id="interval" 
                        type="number" 
                        defaultValue="15" 
                        style = {{width: 60}} 
                        inputProps={{min: 1, style: { textAlign: 'center' }}} 
                        required
                    />
                    minutes.
                </div>

                <div class="Checkbox">
                    <FormControlLabel 
                        control={<Checkbox color="default" />}
                        label="Start on break"
                    />
                    <FormControlLabel 
                        control={<Checkbox color="default" />}
                        label="Show countdown timer"
                    />
                    <FormControlLabel 
                        control={<Checkbox color="default" />}
                        label="Notification sound"
                    />
                </div>

                <Button id="StartStopButton" variant="contained">
                    Start
                </Button>
            </form>
        </div>
    );
}
