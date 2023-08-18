import React from 'react'
import {useState,useEffect} from 'react'
import "./Goalmap.css"
import Goalsetting from './Goalsetting'
import Modal from './Modal'
import GoalmapSchedule from './GoalmapSchedule'
import axios from 'axios'
const Goalmap = () => {

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
    const [dailys,setdailys]= useState<dailysType[]>([])

        const [checked,setchecked]=useState([false,false,false,false])

        useEffect(()=>{
            axios.get('http://localhost:3000/Goalmap')
            .then(res=>{console.log(res.data);setdailys(res.data)})
        },[])


        function handlecheckedChange(e:React.MouseEvent<HTMLDivElement, MouseEvent>,i:number){
            //e.preventDefault()
            let newarray=[...checked]

            newarray[i]=!newarray[i]
            setchecked(newarray)
            e.currentTarget.toggleAttribute("after")
        }

    function handleModifyTask(index:number){
        let newarray=[...ModalsOn]

            newarray[index]=!newarray[index]
            setModalsOn(newarray)
    }

    const [ModalsOn,setModalsOn]=useState([false,false,false,false])

    function generatedailys(){
        
        return (
            dailys.map((item,i)=>(
                <><div className={`daily-task ${+checked[i]?"border-"+item.GoalColor:""}`} >
                    <div className='daily-task-elementsgrid'>
                        <div>

                        <div className='daily-task-title'>{item.title}</div>
                        <div className='daily-task-start'>{new Date(item.start).getHours().toString()}:{new Date(item.start).getMinutes().toString()}/</div>
                        <div className='daily-task-end'>{new Date(item.end).getHours().toString()}:{new Date(item.end).getMinutes().toString()}</div>
                        <div className='daily-task-priority'>priority:{item.priority.toString()}</div>
                        <div className='task-description'>{item.description}</div>
                        </div>
                        <div className='daily-task-buttons'>
                            <div className='goalmap-checkbox-container'>
                                <label className="goalmap-checkbox">Done
                                    <input type="checkbox" onClick={(e)=>{handlecheckedChange(e,i)}}/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <button className='daily-task-modify' onClick={()=>handleModifyTask(i)}>modify</button>
                        </div>
                    </div>
                        <span className=""/>
                    {ModalsOn[i] && <Modal index={i} ModalsOn={ModalsOn} setModalsOn={setModalsOn} dailys={dailys} setTask={setdailys} task={item} ></Modal>}
                        
            </div>
                </>
            ))
        )
    }


    const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);



    useEffect(()=>{
        let advancement=0
        for(let x=0;x<dailys.length;x++){
            if(checked[x]===true){
                advancement+=100/dailys.length
            }
        }
        setFilled(prev=>(prev=Math.round(advancement)))
    },[checked])

  return (
    <div className='GoalmapPage'>
        <div className='Pagetitle'>Goalmap</div>


        <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "#3f387e",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>



        <div className='goalmap-maingrid'>


            <div className='daily-container'>
                <div className='todays-task'>today's task
                    {generatedailys()}

                </div>
            </div>
            <GoalmapSchedule dailys={dailys}/>
        </div>
        {/*<Goalsetting/>*/}
    </div>
  )
}

export default Goalmap