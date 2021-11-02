import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Browse } from "./pages/Browse";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import React from "react";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "../src/constants/routes";
import {useAuthListener} from './hooks/use-auth-listener'
function App() {
  const{user} = useAuthListener()
  return (
    <Router>
      <Switch>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNIN}
       
      >
        <SignIn />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNUP}
      >
        <SignUp />
      </IsUserRedirect>

     <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse/>
     </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <Home/>
      </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
