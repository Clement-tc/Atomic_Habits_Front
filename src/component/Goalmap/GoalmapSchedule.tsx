import React from 'react'
import './GoalmapSchedule.css'

type dailysType = {
  User_id:String,
  description:String,
  GoalColor:String,
  title:String,
  start:Date,
  end:Date,
  priority:Number,
  checkbox:Boolean
}

type ScheduleType ={
  dailys:dailysType[]
}
const GoalmapSchedule = ({dailys}:ScheduleType) => {
  const scheduleTask=dailys
  const hours = ["8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h"]

  return (
    <div className='GoalmapSchedule-container'>
        <div className='GoalmapSchedule-title'> Today's Schedule</div>
        <span className='GoalmapSchedule-hourSpan'></span>
        <div className='GoalmapSchedule-calendar'>
            <div className='GoalmapSchedule-calendar-hours'>
              {hours.map((hour)=><><div className='GoalmapSchedule-hour'>{hour}</div><span className='GoalmapSchedule-hourSpan'></span></>)}
            </div>
            <span className='GoalmapSchedule-hourSpan'></span>
            <div className='GoalmapSchedule-container-tasks'>
              {scheduleTask.map((task)=><div className={`GoalmapSchedule-task ${task.GoalColor}`} style={{height:`${(new Date(task.start).getHours()-new Date(task.end).getHours())*50}px`,
            top:`${new Date(task.start).getHours()*10}px`}}>{task.title}</div>)}
            </div>
        </div>
    </div>
  )
}

export default GoalmapSchedule