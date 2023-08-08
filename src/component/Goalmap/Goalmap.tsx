import React from 'react'
import {useState,useEffect} from 'react'
import "./Goalmap.css"
import Goalsetting from './Goalsetting'
import Modal from './Modal'
import GoalmapSchedule from './GoalmapSchedule'
import axios from 'axios'
const Goalmap = () => {

    const [dailys,setdailys]= useState(
        [
            {
                checkbox:false,
                description:"eat cereals",
                GoalColor:"greenGoal",
                title:"Be healthy",
                date:"monday 6/01/2045",
                priority:1
            },
            {
                checkbox:false,
                description:"do the dishes",
                GoalColor:"blueGoal",
                title:"House shore",
                date:"monday 6/01/2045",
                priority:5
            },
            {
                checkbox:false,
                description:"hail the sunsdfqsdfzxeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesdqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
                GoalColor:"yellowGoal",
                title:"Devote yourself",
                date:"monday 6/01/2045",
                priority:10
            },
            {
                checkbox:false,
                description:"do a little dance",
                GoalColor:"redGoal",
                title:"Exercice",
                date:"monday 6/01/2045",
                priority:1
            }
        ]
    )

        const [checked,setchecked]=useState([false,false,false,false])

        useEffect(()=>{
            axios.get('http://localhost:3000/Goalmap')
            .then(res=>setdailys(res.data))
        })
        function handlecheckedChange(e:React.MouseEvent<HTMLDivElement, MouseEvent>,i:number){
            //e.preventDefault()
            let newarray=[...checked]

            newarray[i]=!newarray[i]
            setchecked(newarray)
            e.currentTarget.toggleAttribute("after")
        }

    function handleModifyTask(index:number){
        console.log("modal", index)
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
                        <div className='daily-task-date'>{item.date}</div>
                        <div className='daily-task-priority'>priority:{item.priority}</div>
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
        for(let x=0;x<checked.length;x++){
            if(checked[x]===true){
                advancement+=100/checked.length
            }
        }
        setFilled(prev=>(prev=advancement))
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




        <div className='daily-container'>
            <div className='todays-task'>today's task
                {generatedailys()}

            </div>
        </div>
        <GoalmapSchedule/>
        <Goalsetting/>
    </div>
  )
}

export default Goalmap