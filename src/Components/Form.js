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
            <button className="homeButton" onClick={clickHandler}>Back to Home</button>
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
                <label> 
                    <input type = 'checkbox'/>
                    Pepperoni
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Sausage
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Canadian Bacon
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Spicy Italian Sausage
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Grilled Chicken
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Onions
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Green Pepper
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Diced Tomatoes
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Black Olives
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Roasted Garlic
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Artichoke Hearts
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Three Cheese
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Pineapple
                </label>
                <label> 
                    <input type = 'checkbox'/>
                    Extra Cheese
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