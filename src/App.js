import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home.js';
import Form from './Components/Form.js';
import Confirmation from './Components/Confirmation.js';

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Form">
          <Form />
        </Route>
        <Route path="/">
          <Confirmation/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
