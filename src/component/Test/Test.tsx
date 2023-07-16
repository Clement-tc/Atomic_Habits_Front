import { useState } from "react"
import "./Test.css"
export function Test(){
    const [array,setArray]=useState(["positive","negative","neutral"])
    const [ColorTest,setColorTest]=useState("yellow")

    function handlecolorchange(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        let newarray=[...array]
        if(newarray[0]==="positive"){
            newarray[0]="negative"
        }else{
            newarray[0]="positive"
        }

        setArray(newarray)

    }
    return (
    <>
    <div className={ColorTest} >hello</div>
    {
        array.map(item=>(
            <>
            <div className={item === "positive" ? 'positive':""}>{item}</div>
            <div className={item === "negative" ? 'negative':""}>{item}</div>
            <div className={item === "neutral" ? 'neutral':""}>{item}</div>
            </>
        ))
    }
    <button onClick={e=>handlecolorchange(e)}>change color</button>
    </>
    )
}