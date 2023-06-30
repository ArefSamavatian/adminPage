import React from 'react';
import classes from './StatusCategory.module.css'

function StatusCargory(props) {
    let color = ''
    let text = ''
    if (props.status === "active") {
        color = 'green'
        text = 'فعال'
    } else if (props.status === 'hide') {
        color = 'yellow'
        text = 'پنهان'

    } else {
        color = 'green'
        text = 'غیره'
    }


    return (
        <div className={classes.statusContainer}>

            <p>{text}</p>
            <div style={{
                backgroundColor: "red",
            }} className={classes.circleStatusCategory}>
            </div>
        
        </div>

    );
}

export default StatusCargory;