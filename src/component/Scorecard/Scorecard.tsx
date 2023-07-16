import React, { ReactNode, useState,useEffect } from "react"
import {AiOutlinePlusCircle} from "react-icons/Ai"
import { FaThumbsUp,FaThumbsDown,FaEquals } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import './habits_Scorecard.css'
import pfp from "../../assets/pfp.jpg"
import ScorecardForm from "./ScorecardForm"
import axios from'axios'
type ScorecardProps = {
    title?:string,

}



export const Scorecard = ({}:

ScorecardProps)=>{

    const [habits,sethabits]=useState(["","","","","",""])
    const [evaluationgrid,setEvaluationgrid]=useState(["positive","positive","neutral","negative","positive","positive"])


    function addHabitsLine(){
        sethabits([...habits,""])
        setEvaluationgrid([...evaluationgrid,""])
        console.log(evaluationgrid)
    }

    function updatehabits(e:React.ChangeEvent<HTMLInputElement>){
        let index=+e.target.name

        console.log(e.target)
        let newhabits= habits.slice()
        newhabits[index]=e.target.value
        sethabits(newhabits)
        console.log(habits)
    }

    function SwitchColor(sign:string,i:number){
        let Newevaluationgrid=[...evaluationgrid]
        Newevaluationgrid[i]=sign
        setEvaluationgrid(Newevaluationgrid)
    }

    function handleDelete(e:React.MouseEvent<HTMLButtonElement, MouseEvent>,index:number){
        sethabits(oldValues=> oldValues.filter((_,i)=>
                i!==index))
        setEvaluationgrid(oldValues=> oldValues.filter((_,i)=>
                i!==index
            ))
    }

    const handleDone=()=>{
        console.log("Done for today")
    }

    /*useEffect(() => {
        axios.get("http://localhost:3000/Scorecard")
        .then(res=>{sethabits(res.data.habits);setEvaluationgrid(res.data.evaluation); console.log(res)})
        .catch(e=>console.log(e))
        console.log(habits)
      },[])*/

    
    return(
        <>
        <div className="habits_scorecard_container">
            <div className="habits_scorecard_atomic">Atomic Habits</div>
            <div className="habits_scorecard_title">The Habits Scorecard</div>
            <div className="routine-elements">
                <div className="scorecard-thehabit">The habit</div>
                <div className="scorecard-button-description-grid">
                    <div >
                        good
                    </div>
                    <div >
                        bad
                    </div>
                    <div >
                    neutral
                    </div>

                </div>
                    <div>
                        <ScorecardForm items={habits} render={(item:string,i:number)=>
                        <input onChange={(e)=>updatehabits(e)} className="routine-element" type="text"id={"routine-element"+i} name={""+i} key={"routine-ele"+i} defaultValue={item}/>}/>
                        <div className="container-button-add">
                            <button className="Scorecard-button-add" onClick={()=>addHabitsLine()} ><AiOutlinePlusCircle size="3em"/> </button>
                        </div>
                    </div>
            <div className="scorecard-button-grid-row">
                    {evaluationgrid.map((item,i)=>(
                        <div key={"buttondiv"+i} className="scorecard-button-grid" >
                        <button key={"positive"+i} className={`scorecard-button ${item ==="positive"?"positive":''}`}  onClick={()=>SwitchColor("positive",i)} ><FaThumbsUp/></button>
                        <button key={"negative"+i} className={`scorecard-button ${item ==="negative"?"negative":''}`}  onClick={()=>SwitchColor("negative",i)}><FaThumbsDown/></button>
                        <button key={"neutral"+i} className={`scorecard-button ${item ==="neutral"?"neutral":''}`}  onClick={()=>SwitchColor("neutral",i)}><FaEquals/></button>
                        <button key={"delete"+i} className="delete-button" onClick={(e)=>handleDelete(e,i)}><BiTrash/></button>
                        </div>
                        ))}
                    

                </div>
            </div>
            <button className="button-Done" onClick={()=>handleDone()}>Done</button>
            </div>
            <img className='Profil_pic' src={pfp} alt="Logo" />
            </>
        
    )
}


