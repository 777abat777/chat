import React from 'react'
import Items from './Items/Items'
import Chat from './Chat/Chat'
import { withNaming } from '@bem-react/classname';
import { observer } from 'mobx-react-lite';
const cn = withNaming({ n: '', e: '__', m: '_', v: '_' })
const cnDialogs = cn('Dialogs');
type Props = {}

const Dialogs = (props: Props) => {
   return (
      <div className={cnDialogs()}>
         <Items />
         <Chat />
      </div>
   )
}

export default observer(Dialogs)