import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home} from './pages/Home'
import {Browse} from './pages/Browse'
import {SignIn} from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import React from "react";

import * as ROUTES from "../src/constants/routes";
function App() {
  return (
    <Router>
       <Route exact path="/browse">
          <Browse/>
        </Route>

        <Route exact path="/signin">
          <SignIn/>
        </Route>

        <Route exact path="/signup">
          <SignUp/>
        </Route>

      
      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
     
    </Router>
  );
}

export default App;
