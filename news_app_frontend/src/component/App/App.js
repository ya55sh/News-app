import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../login/Login";
import Signup from "../Signup/Signup"; 
import Forgotpassword from "../Forgotpassword/Forgotpassword";
import Home from "../Home/Home"
import Business from '../Home/Business';
import Entertainment from '../Home/Entertainment';
import General from '../Home/General';
import Health from '../Home/Health';
import Science from '../Home/Science';
import Sports from '../Home/Sports';
import Technology from '../Home/Technology';

function App() {
  return (
    <div>
    <BrowserRouter>
      <div >
        <Switch>
          <Route exact={true} path = "/" component = {Login}></Route>
          <Route path="/login" exact><Login/></Route>
          <Route path="/signup"><Signup/></Route>
          <Route path="/forgotpassword"><Forgotpassword/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/business" exact><Business/></Route>
          <Route path="/entertainment" exact><Entertainment/></Route>
          <Route path="/general" exact><General/></Route>
          <Route path="/health" exact><Health/></Route>
          <Route path="/science" exact><Science/></Route>
          <Route path="/sports" exact><Sports/></Route>
          <Route path="/technology" exact><Technology/></Route>
        </Switch>
      </div>
    </BrowserRouter>
    </div>  
  );
}

export default App;
