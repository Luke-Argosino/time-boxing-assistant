import './Body.css';
import { TextField } from '@material-ui/core';

function Body() {
    return (   
        <div className="Body">
            I want to 
            <TextField id="Activity" type="default" defaultValue="Code" style = {{width: 100}} />
            with
            <TextField id="break" type="number" defaultValue="5" style = {{width: 50}} />
            minute breaks every
            <TextField id="intreval" type="number" defaultValue="15" style = {{width: 50}} />
            minutes.
        </div>
    );
}

export default Body;