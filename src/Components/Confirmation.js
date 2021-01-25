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
            <h2>Your Fresh Pizza is on its way!</h2>
            <h3>Your Order Summary:</h3>
            <p>Customer Name: {data.customerName}</p>
            <p>{`Delivery Address: ${data.houseNumber}, ${data.streetAddress}, ${data.city}`}</p>
            <p>Pizza Size: {data.size}</p>
            <p>Pizza Sauce: {data.sauce}</p>
            <div className="toppings">
                <p>Toppings Added: </p>
                {data.pepperoni ? <li>Pepperoni</li> : ''}
                {data.sausage ? <li>Sausage</li> : ''}
                {data.canadianBacon ? <li>Canadian Bacon</li> : ''}
                {data.italianSausage ? <li>Spicy Italian Sausage</li> : ''}
                {data.grilledChicken ? <li>Grilled Chicken</li> : ''}
                {data.onions ? <li>Onions</li> : ''}
                {data.greenPepper ? <li>Green Pepper</li> : ''}
                {data.dicedTomatoes ? <li>Diced Tomatoes</li> : ''}
                {data.blackOlives ? <li>Black Olives</li> : ''}
                {data.roastedGarlic ? <li>Roasted Garlic</li> : ''}
                {data.artichokeHearts ? <li>Artichoke Hearts</li> : ''}
                {data.threeCheese ? <li>Three Cheese</li> : ''}
                {data.pineapple ? <li>Pineapple</li> : ''}
                {data.extraCheese ? <li>Extra Cheese</li> : ''}
            </div>
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