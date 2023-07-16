import React from 'react'
import {useState} from 'react'
import "./Goalmap.css"
const Goalmap = () => {

    const [dailyss,setdailyss]= useState([true,false,false])
    const [dailys,setdailys]= useState(
        {
            "task1":{
                "checkbox":true,
                "description":"eat cereals",
                "GoalColor":"blueGoal"
            }
        }
    )

    function generatedailys(){
        Object.keys(dailys).map(item=>(console.log(dailys,"here")))
        return (
            Object.keys(dailys).map(item=>(
                <><div className='daily-task'>
                <div className='task-description'>eat cereals</div>
                <label className="goalmap-checkbox">Done
                    <input type="checkbox" checked={dailys["task1"]["checkbox"]} />
                    <span className="checkmark"></span>
                </label>
                <span className='GoalColor'/>
            </div>
                </>
            ))
        )
    }
  return (
    <div>
        <div className='Pagetitle'>Goalmap</div>

        <div className='daily-container'>

            {generatedailys()}
            <div className='todays-task'>today's task
                <div className='daily-task'>
                    drink milk
                    <div className='daily-task-check'>done</div>
                </div>
                <div className='daily-task'>
                    <div className='task-description'>eat cereals</div>
                    <label className="goalmap-checkbox">Done
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <span className='GoalColor'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goalmap