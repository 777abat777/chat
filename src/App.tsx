import React from 'react';
import { observer } from 'mobx-react'
import './App.scss';
import SideBar from './Components/SideBar/SideBar';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Settings from './Components/Settings/Settings';

function App() {
   return (
      <div className="Wrapper">
         <BrowserRouter>
            <SideBar />
            <Routes>
               <Route path='/' element={<Dialogs />} />
               <Route path='/dialogs/:userId' element={<Dialogs />} />
               <Route path='/dialogs' element={<Dialogs />} />
               <Route path='/settings' element={<Settings />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default observer(App);
