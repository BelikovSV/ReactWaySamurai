import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
        {id: 7, message: 'Yo'},
        {id: 8, message: 'Yo'}
    ]

    let messagesElement = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div ClassName={s.dialog}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs