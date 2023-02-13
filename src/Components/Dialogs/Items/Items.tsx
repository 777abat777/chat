import { withNaming } from '@bem-react/classname'
import { useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import User from './User/User';
import { useStore } from '../../../store/UseStore';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

const cn = withNaming({ n: '', e: '__', m: '_', v: '_' })
const cnItems = cn('Items');
const cnUsers = cn('Users');

type Props = {}



const Items = (props: Props) => {

   let { userId } = useParams()
   if (!userId) {
      userId = "1"
   }
   let { store } = useStore()
   let interval: ReturnType<typeof setInterval> | undefined;
   useEffect(() => {
      interval = setInterval(store.makeRandom, 3000)
   }, store.users)
   useEffect(() => {
      return () => {
         clearInterval(interval)
      }
   }, [])


   let users
   let searchValue = store.saerchValue
   if (searchValue === "") { users = store.users }
   else {
      users = store.users.filter(el => el.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
   }

   const readMessage = (id: number) => {
      store.users.find((el) => {
         if (el.id === id && el.messageCount > 0) {
            el.messageCount = 0
            store.ChangeDialogsCount()
         }
      })
   }
   return (
      <div className={cnItems()}>
         <div className={cnItems('Header')}>
            <input className={cnItems('Search')} type="search" placeholder='Поиск' value={searchValue} onChange={(e) => store.saerchValue = e.target.value} />
         </div>
         <div className={cnUsers()}>
            {
               users.map((el) =>
                  <NavLink to={`/dialogs/${el.id}`} key={el.id} onClick={() => { readMessage(el.id) }}>
                     <User currentId={userId} name={el.name} id={el.id} message={el.message} messageCount={el.messageCount} online={el.online} photo={el.photo} time={el.time} />
                  </NavLink>
               )
            }
         </div>
      </div>
   )
}

export default observer(Items)