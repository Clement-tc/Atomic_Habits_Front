import React, { FC, ReactNode } from 'react';
import {render} from 'react-dom'

interface ScorecardFormProps<T> {
  items: T[];
  render:(item:T,i:number)=>ReactNode
}

const ScorecardForm = <T extends {}> ({ items,render} :ScorecardFormProps<T>)=> {
  return (
    <>
      
      <form key={"form"} action="/Scorecard" method="post">
            {items.map((item,i)=>(

                < div key={"div"+i}>{render(item,i)}</div>

            ))}
            <input key={"submit"} type="submit" hidden />
      </form>
    </>
  );
};

export default ScorecardForm;