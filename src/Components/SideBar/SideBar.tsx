import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { withNaming } from '@bem-react/classname'
import userLogo from './../../assets/img/pictures/user_logo.png'
import arrow from './../../assets/img/icons/Vector-arrow.png'
import message from './../../assets/img/icons/message.png'
import settings from './../../assets/img/icons/settings.png'
import { useStore } from '../../store/UseStore'
import { observer } from 'mobx-react'
const cn = withNaming({ n: '', e: '__', m: '_', v: '_' })


type Props = {}

const cnSideBar = cn('SideBar');
const cnUser = cn('User');
const cnNavigation = cn('Navigation');

type Page = "dialogs" | "settings"
type Mode = "open" | "close"

function SideBar({ }: Props) {
   let { store } = useStore()
   let [currentPage, setCurrentPage] = useState<Page>("dialogs")
   let [mode, setMode] = useState<Mode>("open")
   let toggleMenu = () => {
      mode === "close" ? setMode("open") : setMode("close")
   }
   return (
      <div className={cnSideBar({ state: mode })}>
         <div className={cnUser({ state: mode })}>
            <img src={userLogo} alt="logo" className={cnUser('Logo')} />
            <p className={cnUser('Name')}>Иван Иванов</p>
            <p className={cnUser('Status')}>Online</p>
         </div>
         <nav className={cnNavigation({ state: mode })}>
            <ul className={cnNavigation('List')} >
               <li onClick={() => setCurrentPage("dialogs")} className={cnNavigation('Item', { status: currentPage === "dialogs" ? "current" : "" })}>
                  <NavLink to='/dialogs'> <img src={message} alt="message" /> <span>Диалоги </span>{store.unreadDialogs > 0 && <mark>{store.unreadDialogs}</mark>}</NavLink>
               </li>
               <li onClick={() => setCurrentPage("settings")} className={cnNavigation('Item', { status: currentPage === "settings" ? "current" : "" })}>
                  <NavLink to='/settings'> <img src={settings} alt="settings" /><span> Настройки</span></NavLink>
               </li>
            </ul>
         </nav>
         <button onClick={() => toggleMenu()} className={cnSideBar('Button', { state: mode })}> <img className={cnSideBar('Arrow')} src={arrow} alt="" /></button>
      </div >
   )
}

export default observer(SideBar)


