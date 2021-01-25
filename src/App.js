import React, {useState, useEffect} from "react";
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home.js';
import Form from './Components/Form.js';
import Confirmation from './Components/Confirmation.js';
import {Container, Row} from 'reactstrap';

import "./App.css";

const App = () => {
    const orderInitialValues = {
      size : '',
      sauce: '',
      pepperoni: false,
      sausage: false,
      canadianBacon: false,
      italianSausage: false,
      grilledChicken: false,
      onions: false,
      greenPepper: false,
      dicedTomatoes: false,
      blackOlives: false,
      roastedGarlic: false,
      artichokeHearts: false,
      threeCheese: false,
      pineapple: false,
      extraCheese: false,
      instructions: '',
      customerName: '',
      houseNumber: '',
      streetAddress: '',
      city: '',
      code: '',
    };

  const [form, setForm] = useState(orderInitialValues);
  const [orderData, setOrderData] = useState({});

  const orderQty = [1,2,3,4,5,6,7,8,9,10];

  const updateForm = (inputName, inputValue) => {
    setForm({...form, [inputName]: inputValue});
  }

  useEffect(() => {
    console.log(form);
  }, [form])

  const submit = () => {
      axios.post("https://reqres.in/api/users", form)
      .then((res) => {
        const order = res.data;
        console.log(order);
        setForm(orderInitialValues);
        setOrderData(order);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const resetOrder = () => {
    setOrderData({});
  }

  return (
    <Container>
      <h1>Lambda Eats</h1>
      <Row>
        <Switch>
          <Route path="/pizza">
            <Form updateFunction = {updateForm} submitFunction = {submit} orderQty = {orderQty} form = {form}/>
          </Route>
          <Route path="/Confirmation">
            <Confirmation data={orderData} resetOrder = {resetOrder}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};
export default App;
