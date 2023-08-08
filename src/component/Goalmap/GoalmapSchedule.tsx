import React from 'react'
import './GoalmapSchedule.css'
const GoalmapSchedule = () => {
  return (
    <div className='GoalmapSchedule-container'>
        <div className='GoalmapSchedule-title'> Today's Schedule</div>
        <div className='GoalmapSchedule-calendar'>
            <div className='GoalmapSchedule-calendar-hours'>
                9 am
            </div>
            <div className='GoalmapSchedule-calendar-tasks'>
                task 1
            </div>
        </div>
    </div>
  )
}

export default GoalmapSchedule