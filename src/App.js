
import './App.css';
import ScalePage from "./components/htmm/scale";
import React, {useContext, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, useLocation, useHistory} from 'react-router-dom';
import NavSite from "./components/Nav/navbar";
import HomePage from "./components/htmm/homepage"
import PostsUI from "./components/htmm/posts";
import {fbContext} from "./Firebase";
import Explore from "./components/htmm/explore";
import useBigFBD from "./hooks/useBigFBD";
function App() {
    const [user, setUser] = useState(window.localStorage.getItem('user'))
    const fb = useContext(fbContext)
    fb.fb.auth().onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
            window.localStorage.setItem('user', user);
            fb.database.ref(user.uid).update({
                Username: user.displayName
            })

        } else {
            setUser(null)
        }
    });

    const location = useLocation();
    const history = useHistory();
    return (
     <div className="App">
       <NavSite user={user}/>
       <Switch>
           <Route exact path='/' component={HomePage}/>
           <Route path='/sign-in' component={ () => HomePage({location, history})}/>
           <Route path='/sign-out' component={ () => HomePage({location, history})}/>
           <Route path='/piano-scales' component={ScalePage}/>
           <Route path ='/explore' component={() => Explore({user})}/>
           <Route path ='/posts' component={() => PostsUI({user})}/>
       </Switch>

     </div>
   );
}

export default App;
