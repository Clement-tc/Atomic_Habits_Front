import React from 'react'
import {useState} from 'react'
import "./Modal.css"
type ModalT={
    index:number;
    setModalsOn:React.Dispatch<React.SetStateAction<boolean[]>>;
    ModalsOn:boolean[];
}
const Modal = ({index,ModalsOn,setModalsOn}:ModalT) => {

    function handleModifyTask(index:number){
        let newarray=[...ModalsOn]

            newarray[index]=!newarray[index]
            setModalsOn(newarray)
    }
  return (
    <><div className='modifying-modal'>
        <label className='modifying-modalTitleLabel'>title</label>
        <input className='modifying-modalTitle' value="title"/>
        <textarea  className='modifying-modalDescription' rows={5} cols={66}  value="ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddLorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nesciunt quibusdam temporibus natus reprehenderit, quisquam voluptatem quae sunt voluptatibus cumque iure eum voluptates sequi, porro, aliquid vero sit dicta aspernatur." />
        <label>goal </label>
        <select className='modifying-modalGoal' id="country" name="country">
            <option value="redGoal">redGoal</option>
            <option value="blueGoal">blueGoal</option>
            <option value="greenGoal">greenGoal</option>
        </select>
        <button className='modifying-modal-close' onClick={()=>handleModifyTask(index)}>Close</button>
        <button className='modifying-modal-submit' onClick={()=>handleModifyTask(index)}>Submit</button>
        </div>    
        <div className='screenblock-modal'></div> 
    </>
  )
}

export default Modal