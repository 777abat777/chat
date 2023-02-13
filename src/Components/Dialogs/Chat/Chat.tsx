import { withNaming } from '@bem-react/classname';
import React from 'react'
import { MessageType } from '../../../store/Store';
import { useStore } from '../../../store/UseStore';
const cn = withNaming({ n: '', e: '__', m: '_', v: '_' })

const cnChat = cn('Chat');
const cnChatBody = cn('Chat-Body');
const cnMessage = cn('Message');

type Props = {}

const Chat = (props: Props) => {
   let { store } = useStore()
   return (
      <div className={cnChat()}>
         <header className={cnChat('Header')}>
            <h2 className={cnChat("Title")}>Анастасия Александровна</h2>
            <h3 className={cnChat("Typing")}> <span></span> Печатает</h3>
         </header>
         <section className={cnChatBody()}>
            {store.messages.map(el => <Message key={el.id} message={el.message} author={el.author} date={el.date} id={el.id} />)}

         </section>
         <div className={cnChat("Footer")}>
            <input type="text" placeholder='Написать сообщение...' className={cnChat("Input")} />
         </div>
      </div>
   )
}

export default Chat


const Message = ({ author, date, id, message }: MessageType) => {
   return (
      <div className={cnMessage({ author: author === 'user' ? 'user' : author === "time" ? 'time' : 'friend' })}>
         <p className={cnMessage("Text")}>{message}</p>
         <span className={cnMessage("Date")}>{date}</span>
      </div>
   )
}
