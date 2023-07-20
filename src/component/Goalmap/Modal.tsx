import React from 'react'
import {useState} from 'react'
import "./Modal.css"
type ModalT={
    index:number;
    setModalsOn:React.Dispatch<React.SetStateAction<boolean[]>>;
    ModalsOn:boolean[];
    task:taskT
    setTask:React.Dispatch<React.SetStateAction<{
        checkbox: boolean;
        description: string;
        GoalColor: string;
        title: string;
        date: string;
        priority: number;
    }[]>>
    dailys: {
        checkbox: boolean;
        description: string;
        GoalColor: string;
        title: string;
        date: string;
        priority: number;
    }[]
}

type taskT={
    checkbox: boolean;
    description: string;
    GoalColor: string;
    title: string;
    date: string;
    priority: number;
}
const Modal = ({index,ModalsOn,setModalsOn,task,setTask,dailys}:ModalT) => {
    const [newTask,setNewTask]=useState(Object.assign(task))

    function handleModifyTask(){
        let newarray=[...ModalsOn]

            newarray[index]=!newarray[index]
            setModalsOn(newarray)
    }


function HandleInputMofier(value:string,field:string){

    if(field==="title"){
        setNewTask({...newTask,title:value})
    }
    if(field==="description"){
        setNewTask({...newTask,description:value})
    }

    if(field==="goal"){
        setNewTask({...newTask,GoalColor:value})
    }
    console.log(value,newTask)
}

function handleSubmit(){
    let buffer = [...dailys]
    buffer[index]=newTask
    setTask(buffer)
    console.log(dailys)
    handleModifyTask()
}
  return (
    <><div className='modifying-modal'>
        <label className='modifying-modalTitleLabel'>Title</label>
        <input className='modifying-modalTitle' onChange={(e)=>HandleInputMofier(e.target.value,"title")} value={newTask.title}/>
        <label> </label>
        <textarea  className='modifying-modalDescription' onChange={(e)=>HandleInputMofier(e.target.value,"description")} rows={5} cols={66}  value={newTask.description} />
        <label className='modifying-modalGoalLabel'>goal </label>
        <select className='modifying-modalGoal' onChange={(e)=>HandleInputMofier(e.target.value,"goal")} id="country" name="country">
            <option value="redGoal">{newTask.GoalColor}</option>
            <option value="blueGoal">blueGoal</option>
            <option value="greenGoal">greenGoal</option>
        </select>
        <button className='modifying-modal-close' onClick={()=>handleModifyTask()}>Close</button>
        <button className='modifying-modal-submit' onClick={()=>handleSubmit()}>Submit</button>
        </div>    
        <div className='screenblock-modal'></div> 
    </>
  )
}

export default Modal