import { withNaming } from '@bem-react/classname'
import React from 'react'
import { UserType } from '../../../../store/Store';
import { observer } from 'mobx-react';
const cn = withNaming({ n: '', e: '__', m: '_', v: '_' })
const cnUserCard = cn('User-Card');

type Props = UserType & { currentId: string | undefined }


const User = ({ id, message, messageCount, name, online, photo, time, currentId }: Props) => {
   return (
      <div className={cnUserCard({ state: Number(currentId) == id ? 'active' : "" })}>
         <div className={cnUserCard('Left')}>
            <img className={cnUserCard('Logo')} src={photo} alt="" />
            {online && <mark className={cnUserCard('Status')}></mark>}
         </div>
         <div className={cnUserCard("Front")}>
            <h2 className={cnUserCard("Title")}>{name}</h2>
            {message.typing && <p className={cnUserCard("Message")}>{message.value}</p>}
            {!message.typing && <p className={cnUserCard("Message", { typing: 'active' })}> <span></span> Печатает</p>}
         </div>
         <div className={cnUserCard("Right")}>
            <p className={cnUserCard('Time')}>{time}</p>
            {messageCount > 0 && <p className={cnUserCard('Count')}>{messageCount}</p>}
         </div>
      </div>
   )
}

export default observer(User)