import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home.js';
import Form from './Components/Form.js';
import Confirmation from './Components/Confirmation.js';

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/Form">
            <Form />
          </Route>
          <Route path="/Confirmation">
            <Confirmation/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </div>
  );
};
export default App;
