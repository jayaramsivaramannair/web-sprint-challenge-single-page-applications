import React from 'react';
import {useHistory} from 'react-router-dom';

const Form = () => {
    const orderQty = [1,2,3,4,5,6,7,8,9,10];
    const history = useHistory();
    const clickHandler = () => {
        history.goBack();
    }
    return (
        <div className = "form">
            <button className="homeButton" onClick = {clickHandler}>Back to Home</button>
            <h1>Build Your Own Pizza</h1>
            <form>
                <h2>Choice of Size</h2>
                <p>Required</p>
                <label className="labels">
                    <select>
                        <option>--Select Size--</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                </label>
                <h2>Choice of Sauce</h2>
                <p>Required</p>
                <label>
                    <input type = 'radio'/>
                    Original Red
                </label>
                <label> 
                    <input type = 'radio'/>
                    Garlic Ranch
                </label>
                <label> 
                    <input type = 'radio'/>
                    BBQ Sauce
                </label>
                <label> 
                    <input type = 'radio'/>
                    Spinach Alfredo
                </label>
                <h2>Add Toppings</h2>
                <p>Choose up to 10</p>
                <label> Pepperoni
                    <input type = 'checkbox'/>
                </label>
                <label> Sausage
                    <input type = 'checkbox'/>
                </label>
                <label> Canadian Bacon
                    <input type = 'checkbox'/>
                </label>
                <label> Spicy Italian Sausage
                    <input type = 'checkbox'/>
                </label>
                <label> Grilled Chicken
                    <input type = 'checkbox'/>
                </label>
                <label> Onions
                    <input type = 'checkbox'/>
                </label>
                <label> Green Pepper
                    <input type = 'checkbox'/>
                </label>
                <label> Diced Tomatoes
                    <input type = 'checkbox'/>
                </label>
                <label> Black Olives
                    <input type = 'checkbox'/>
                </label>
                <label> Roasted Garlic
                    <input type = 'checkbox'/>
                </label>
                <label> Artichoke Hearts
                    <input type = 'checkbox'/>
                </label>
                <label> Three Cheese
                    <input type = 'checkbox'/>
                </label>
                <label> Pineapple
                    <input type = 'checkbox'/>
                </label>
                <label> Extra Cheese
                    <input type = 'checkbox'/>
                </label>
                <h2>Special Instructions</h2>
                <label>
                    <input type = 'text' placeholder="Anything else you'd like to add?"/>
                </label>
                <label className="labels">
                    <select>
                        {orderQty.map((order) => {
                            return <option>{order}</option>
                        })}
                    </select>
                </label>
            </form>
            <button className="orderButton">Order Total</button>
        </div>
    )
}

export default Form;