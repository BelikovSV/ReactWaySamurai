import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from './components/Navbar/News/News'
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import Friends from "./components/Navbar/Friends/Friends"


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs dialogs={props.state.messagesPage.dialogs}
                                                             messages={props.state.messagesPage.messages}
                                                             newMessageText={props.state.messagesPage.newMessageText}
                                                             dispatch={props.dispatch}/>}/>
                    <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}
                                                             newPostText={props.state.profilePage.newPostText}
                                                             dispatch={props.dispatch}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route exact path='/friends' element=<Friends friends={props.state.friendsPage.friend}/>/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
