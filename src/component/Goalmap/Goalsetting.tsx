import React from 'react'
import {useState} from 'react'
import "./Goalsetting.css"
const Goalsetting = () => {

    const [goalList,setgoalList]=useState([
        {
            title:"Be healthy",
            task:["eat cerals","workout","sleep early"],
        },
        {
            title:"Be happy",
            task:["meditate","talk with friends","play guitar"],
        },
        {
            title:"Earn Money",
            task:["Find a job","practice leetcode","work on habit tracker"],
        }])

    function generateGoalsetting(){
        return(
            goalList.map((item,i)=>(
                <div className='Goalsetting-singlecontainer'>
                    <div className='Goalsetting-singlecontainerTitle'>{item.title}</div>

                    <div className='Goalsetting-singlecontainerTask'>
                        {item.task.map(task=>(
                            <div className='Goalsetting-singleTask'>{task}</div>
                        ))}
                    </div>
                </div>
            ))
        )
    }
  return (
    <div className='goalsettingpage'>
        <div className='Goalsetting-title'>
            Goalsetting

        </div>

        <div className='Goalsetting-listContainer'>
                {generateGoalsetting()}
            </div>
    </div>
  )
}

export default Goalsetting