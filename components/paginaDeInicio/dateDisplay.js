import React from 'react'
import PropTypes from 'prop-types'

function DateDisplay(props) {
    return (
        <div className="dateContainer">
            <div className="dateRange">Del</div>
            <div className="dateDisplay">
                <div>Domingo</div>
                <div>14</div>
                <div>Septiembre 2021</div>
                <div className="line "></div>
                <div>8:00 pm</div>
            </div>
        </div>
    )

}

DateDisplay.propTypes = {

}

export default DateDisplay

