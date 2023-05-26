import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator} from "../../../redux/state";
import {updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.name} likecount={p.likesCout}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
       //props.dispatch({type: 'ADD-POST'});
       props.dispatch(addPostActionCreator());

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }
    


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>);
}

export default MyPosts;
