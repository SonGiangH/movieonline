import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function TvRating(props) {
    const tv = props.tv

    return (
        <CircularProgressbar value={tv.vote_average} maxValue={10} text={`${tv.vote_average?.toFixed(1)}`}
            styles={buildStyles({
                // Text size
                textSize: '20px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                // Colors
                textColor: '#fff',
                pathColor: '#5179ff',
                trailColor: 'transparent'
            })} />
    )
}