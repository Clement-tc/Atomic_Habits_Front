import React from 'react'
import {useState} from 'react'
import "./Modal.css"

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

type ModalT={
    index:number;
    setModalsOn:React.Dispatch<React.SetStateAction<boolean[]>>;
    ModalsOn:boolean[];
    task:dailysType
    setTask:React.Dispatch<React.SetStateAction<dailysType[]>>
    dailys:dailysType[]
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
    if(field==="start"){
        setNewTask({...newTask,start:value})
    }
    if(field==="priority"){
        setNewTask({...newTask,priority:value})
    }
    if(field==="start"){
        setNewTask({...newTask,start:value})
    }
    if(field==="end"){
        setNewTask({...newTask,end:value})
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
        <label className='modifying-modalDateLabel'>Date</label>
        <input className='modifying-modalDate' onChange={(e)=>HandleInputMofier(e.target.value,"date")} value={newTask.start}/>

        <label className='modifying-modalStartinghour'>task period :</label>
        <input className='modifying-modalStartinghour' onChange={(e)=>HandleInputMofier(e.target.value,"start")} value={newTask.start}/>
        <div className='modifying-modalStartinghourslash'>/</div>
        <input className='modifying-modalEndinghour' onChange={(e)=>HandleInputMofier(e.target.value,"end")} value={newTask.end}/>



        <textarea  className='modifying-modalDescription' onChange={(e)=>HandleInputMofier(e.target.value,"description")} rows={5} cols={66}  value={newTask.description} />

        <label className='modifying-modalPriorityLabel'>Priority </label>
        <select className='modifying-modalPriority' onChange={(e)=>HandleInputMofier(e.target.value,"priority")} id="country" name="country">
            <option value="1">{newTask.priority}</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>


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