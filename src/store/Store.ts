import { makeAutoObservable } from "mobx"
import userLogo1 from './../assets/img/pictures/card_logo_1.png'
import userLogo2 from './../assets/img/pictures/card_logo_2.png'
import userLogo3 from './../assets/img/pictures/card_logo_3.png'
import userLogo4 from './../assets/img/pictures/card_logo_4.png'

export type UserType = {
   name: string
   photo: string | undefined
   online: boolean
   message: {
      value: string,
      typing: boolean
   }
   time: string
   messageCount: number
   id: number
}

export type MessageType = {
   message: string
   date: string,
   author: "user" | "friend" | "time",
   id: number
}


const initialMessage: MessageType[] = [
   { message: "Хорошо Отправил", date: "8.27", author: "friend", id: 1 },
   { message: "Благодарю", date: "14.47", author: "user", id: 2 },
   { message: "Привет, как дела?", date: "14:45", author: "friend", id: 3 },
   { message: "Отправь пожалуйста документ с резолюцией", date: "14:45", author: "friend", id: 4 },
   { message: "Привет", date: "14:45", author: "user", id: 5 },
   { message: "Спасибо, получила", date: "15:35", author: "friend", id: 6 },
   { message: "", date: "18 ноября", author: "time", id: 14 },
   { message: "Доброе утро!", date: "8.27", author: "friend", id: 7 },
   { message: "Доброе утро!", date: "8.27", author: "user", id: 8 },
   { message: "Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов. Используется он веб-дизайнерами для вставки на интернет-страницы", date: "8.27", author: "friend", id: 9 },
   { message: "Спасибо, получила", date: "15:35", author: "friend", id: 10 },
   { message: "Доброе утро!", date: "8.27", author: "friend", id: 11 },
   { message: "Доброе утро!", date: "8.27", author: "user", id: 12 },
   { message: "Доброе утро!", date: "8.27", author: "user", id: 13 },

]

const initialStateUsers: UserType[] = [
   { name: 'Дмитрий Анатольевич', message: { value: 'Документы будут готовы к вечеру', typing: true }, messageCount: 0, online: true, time: "10:43", photo: userLogo1, id: 1 },
   { name: 'Анастасия Александровна', message: { value: 'Доступна новая веб-версия... ', typing: false }, messageCount: 10, online: true, time: "10:43", photo: userLogo2, id: 2 },
   { name: 'Диалог М', message: { value: 'Добрый день!', typing: true }, messageCount: 2, online: true, time: "10:43", photo: userLogo3, id: 3 },
   { name: 'Андрей В.', message: { value: 'И слова, получив текст широко известно', typing: true }, messageCount: 0, online: false, time: "17:43", photo: userLogo4, id: 4 },
   { name: 'Анна', message: { value: 'Документы будут готовы к вечеру', typing: true }, messageCount: 2, online: true, time: "10:43", photo: userLogo1, id: 5 },
   { name: 'Игорь Хоменко', message: { value: 'Документы будут готовы к вечеру', typing: false }, messageCount: 2, online: true, time: "10:43", photo: userLogo1, id: 6 },
   { name: 'Алина Викторовна', message: { value: 'Документы будут готовы к вечеру', typing: false }, messageCount: 2, online: true, time: "20:43", photo: userLogo1, id: 7 },
   { name: 'Вова', message: { value: 'Создающие собственные варианты ', typing: true }, messageCount: 2, online: true, time: "10:43", photo: userLogo1, id: 8 },
   { name: 'Алексей курочкин', message: { value: 'Документы будут готовы к вечеру', typing: true }, messageCount: 0, online: false, time: "10:43", photo: userLogo1, id: 9 },
   { name: 'Дмитрий Анатольевич', message: { value: 'Документы будут готовы к вечеру', typing: false }, messageCount: 2, online: true, time: "10:43", photo: userLogo1, id: 10 },
   { name: 'Дмитрий Анатольевич', message: { value: 'Документы будут готовы к вечеру', typing: false }, messageCount: 0, online: true, time: "10:43", photo: userLogo2, id: 11 },
   { name: 'Дмитрий Анатольевич', message: { value: 'Документы будут готовы к вечеру', typing: true }, messageCount: 2, online: false, time: "10:43", photo: userLogo1, id: 12 },
   { name: 'Дмитрий Анатольевич', message: { value: 'Документы будут готовы к вечеру', typing: false }, messageCount: 0, online: true, time: "10:43", photo: userLogo2, id: 13 },
]
export class Store {
   users: UserType[] = initialStateUsers
   messages: MessageType[] = initialMessage
   saerchValue = ''
   unreadDialogs = this.accumDialogsCount()
   constructor() {
      makeAutoObservable(this)
   }
   accumDialogsCount() {
      return (
         this.users.reduce((accum, el) => {
            if (el.messageCount > 0) {
               return accum + 1
            }
            return accum
         }, 0)
      )
   }
   ChangeDialogsCount() {
      if (this.unreadDialogs > 0) {
         this.unreadDialogs--
      }
   }
   makeRandom = () => {
      let randomUserId = getRandomInt(0, this.users.length)
      console.log('work')
      this.users.find((el) => {
         if (el.id == randomUserId) {
            el.online = !el.online
            el.message.typing = !el.message.typing
            el.messageCount++
            this.unreadDialogs = this.accumDialogsCount()
         }
      })
   }
}

function getRandomInt(min: number, max: number) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}
