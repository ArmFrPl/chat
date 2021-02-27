import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import firebase from 'firebase';
// import firebaseConfig from '../Utils/firebase.config'

import Login from './Login';
import Register from './Register';
import Chats from './Chats';
import Sidebar from './Sidebar';
import SelectChat from './SelectChat';


// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState('/');
  const [chatName, setChatName] = useState('')
  const [closed, changeClosed] = useState(false);
  
  return (
    <div className="App">
      <Router >
        <Sidebar isLoggedIn={isLoggedIn} onLoginChange={setIsLoggedIn} location={location} setLocation={setLocation} />
        <Switch>
          <Route path="/" exact> 
            <SelectChat setChatName={setChatName} open={changeClosed}/>
          </Route>
          <Route path="/chats" exact> 
            <Chats isLoggedIn={isLoggedIn} chatName={chatName} closed={closed} changeClosed={changeClosed} setChatName={setChatName} />
          </Route>
          <Route path="/login">
            <Login isLoggedIn={isLoggedIn} onLoginChange={setIsLoggedIn} location={location}  />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
