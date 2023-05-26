import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageTextActionCreator} from "../../../redux/state";
import {addMessageActionCreator} from "../../../redux/state";

const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)
    let newMessageElement = React.createRef();
    let addMessage = () => {
        //props.dispatch({type: 'ADD-MESSAGE'});
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                {messagesElement}
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={onMessageChange} ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
}

export default Dialogs