import React from "react";
import FriendItem from "./FriendsElement";
import s from './../Dialogs/Dialogs.module.css'

const Friends = (props) => {
    let friendsElement = props.friends.map(f => <FriendItem name={f.name} id={f.id}/>);
    return (
        <div>
            <div className={s.dialogs}>
                {friendsElement}
            </div>
        </div>
    );
}

export default Friends;
