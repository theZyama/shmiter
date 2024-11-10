import './App.css'
import {useState} from "react";

import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";


function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });


    return (
        <div className={'app'}>
            <Navigation user={user}/>
            <Body stats={stats} user={user}/>
        </div>
    )
}

export default App
