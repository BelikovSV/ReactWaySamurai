const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name: 'Hi, how are you?', likesCout: 12},
                {id: 2, name: 'It\'s my fitst post!', likesCout: 3},
                {id: 3, name: 'It\'s my fitst post!', likesCout: 6},
                {id: 4, name: 'It\'s my fitst post!', likesCout: 1},
                {id: 5, name: 'It\'s my fitst post!', likesCout: 9},
                {id: 6, name: 'It\'s my fitst post!', likesCout: 3},
                {id: 7, name: 'Мой новый пост', likesCout: 3}
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageText: 'Текст для диалога из пропсов'
        },
        friendsPage: {
            friend: [
                {id: 1, name: 'Egor'},
                {id: 2, name: 'Sergey'},
                {id: 3, name: 'Ruslan'},
                {id: 4, name: 'Maxim'},
                {id: 5, name: 'Roma'}
            ]
        }
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log('State changed')
    },
    subscribe (observed) {
        this._callSubscriber = observed; //паттерн observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 8,
                name: this._state.profilePage.newPostText,
                likesCout: 13
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber();
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text})

export default store;
window.store = store;
