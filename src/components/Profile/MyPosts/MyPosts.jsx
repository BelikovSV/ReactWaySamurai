import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    let posts = [
        {id: 1, name: 'Hi, how are you?', likesCout: 12},
        {id: 2, name: 'It\'s my fitst post!', likesCout: 3},
        {id: 3, name: 'It\'s my fitst post!', likesCout: 6},
        {id: 4, name: 'It\'s my fitst post!', likesCout: 1},
        {id: 5, name: 'It\'s my fitst post!', likesCout: 9},
        {id: 6, name: 'It\'s my fitst post!', likesCout: 3},
        {id: 7, name: 'Мой новый пост', likesCout: 3}
    ]

    let postsElement = posts.map(p => <Post message={p.name} likecount={p.likesCout}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea className={s.are}></textarea>
            </div>
            <div>
                <button className={s.but}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>);
}

export default MyPosts;
