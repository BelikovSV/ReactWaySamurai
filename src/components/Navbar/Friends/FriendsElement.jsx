import React from 'react'
import s from './../Friends/Friends.module.css'


import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = "/friends/" + props.id
    return (
        <div className={s.item}>
            <img src='data:image/jpeg;base64,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'/>
            <NavLink to={path} className={({isActive}) => isActive ? s.activeLink : s.item}>{props.name}</NavLink>
        </div>
    );
}

export default FriendItem

