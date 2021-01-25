import React from 'react';
import {useHistory} from 'react-router-dom';

const Confirmation = (props) => {
    const {data, resetOrder} = props;
    const history = useHistory();
    const clickHandlerForPizza = () => {
        resetOrder();
        history.goBack();
    }
    const clickHandlerForHome = () => {
        resetOrder();
        history.push('/');
    }

    const specialInstructions = (!data.instructions ? 'None' : data.instructions);

    if(!data.customerName) {
        return <h2>Sit Tight. Your order is being created...</h2>
    }

    return (
        <div className = "confirmation">
            <p>Your Fresh Pizza is on its way!</p>
            <p>Your Order Summary:</p>
            <p>Customer Name: {data.customerName}</p>
            <p>{`Delivery Address: ${data.houseNumber}, ${data.streetAddress}, ${data.city}`}</p>
            <p>Pizza Size: {data.size}</p>
            <p>Pizza Sauce: {data.sauce}</p>
            <p>Toppings Added: </p>
            <p>Special Instructions: {specialInstructions}</p>
            <div className="returnButtons">
                <button onClick={clickHandlerForHome}>
                    Return-To-Home
                </button>
                <button onClick={clickHandlerForPizza}>
                    Order Another Pizza
                </button>
            </div>
        </div>
    )
}

export default Confirmation;