import { useState } from 'react'
import {Profil} from './component/Profil/Profil.jsx'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Scorecard } from './component/Scorecard/Scorecard.tsx'
import Login from './component/Login/Login.tsx'
import RequireAuth from './component/RequireAuth';
import Goalmap from './component/Goalmap/Goalmap.tsx';
import { Test } from './component/Test/Test.tsx';

const ROLES  = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}
function App() {

  return (
    <>
      <Goalmap/>
        <Routes>
          <Route path='/hey' element={<Scorecard/>}/>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>
            <Route path='/Scorecard' element={<Scorecard/>}/>
          </Route>
          
        </Routes>


    </>
  )
}

export default App
/*<Route path='/Login' element={<Login/>}/>*/