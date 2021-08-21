import React from 'react'
import PropTypes from 'prop-types'
import { useDate } from '../../hooks/useDate';

function DateDisplay({ day, month, year, dayName, hour, last=false, unique }) {

    return (
        <div className="dateContainer">
            {unique? <></> : <div className="dateRange">{last?"Al":"Del"}</div>}
            <div className="dateDisplay">
                <div>{dayName}</div>
                <div>{day}</div>
                <div>{`${month} ${year}`}</div>
                <div className="line "></div>
                <div>{hour} {parseInt(hour.slice(0,2))>=12? 'pm':'am'}</div>
            </div>
        </div>
    )

}

DateDisplay.propTypes = {

}

export default DateDisplay

