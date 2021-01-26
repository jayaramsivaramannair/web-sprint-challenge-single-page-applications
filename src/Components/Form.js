import React, {useState, useEffect} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import * as yup from 'yup';
import pizza from "../Assets/pizza.svg";

const schema = yup.object().shape({ 
    customerName: yup.string().required('Name is required').min(2, "Names must be atleast 2 Characters Long"),
    houseNumber: yup.string().required('House/Apartment Number is Required'),
    streetAddress: yup.string().required('Street Name is Required'),
    city: yup.string().required("City Name is required"),
    code: yup.string().required('Zip Code is required'),
    instructions: yup.string().required('Enter "None" if no special instructions'),
    pepperoni: yup.boolean().oneOf([true, false]),
    quantity: yup.number().oneOf([1,2,3,4,5,6,7,8,9,10]),
    sausage: yup.boolean().oneOf([true, false]),
    canadianBacon: yup.boolean().oneOf([true, false]),
    italianSausage: yup.boolean().oneOf([true, false]),
    grilledChicken: yup.boolean().oneOf([true, false]),
    onions: yup.boolean().oneOf([true, false]),
    greenPepper: yup.boolean().oneOf([true, false]),
    dicedTomatoes: yup.boolean().oneOf([true, false]),
    blackOlives: yup.boolean().oneOf([true, false]),
    roastedGarlic: yup.boolean().oneOf([true, false]),
    artichokeHearts: yup.boolean().oneOf([true, false]),
    threeCheese: yup.boolean().oneOf([true, false]),
    pineapple: yup.boolean().oneOf([true, false]),
    extraCheese: yup.boolean().oneOf([true, false]),
    sauce: yup.string().oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spanish Alfredo'], "You must select the type of sauce"),
    size: yup.string().oneOf(['Small', 'Medium', 'Large', 'Extra Large'], 'You must select the size of pizza')
})

const Form = (props) => {
    const [errors, setErrors] = useState({
        customerName: '', 
        houseNumber: '', 
        streetAddress: '', 
        city: '',
        code: '',
        sauce: '',
        size: '',
        instructions: '',
    })

    const match = useRouteMatch();
    console.log(match);

    const {updateFunction, submitFunction, orderQty, form} = props;
    const [disabled, setDisabled] = useState(true);
    const history = useHistory();
    const clickHandlerForHome = () => {
        history.goBack();
    }

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch((err) => {
            setErrors({...errors, [name]: err.errors[0]})
        })
    }

    const change = (evt) => {
        const {checked, value, name, type} = evt.target;
        const updatedValue = type === 'checkbox' ? checked : value;
        updateFunction(name, updatedValue);
        setFormErrors(name, updatedValue);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('Hello from onSubmit');
        submitFunction();
        history.push('/Confirmation');
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return (
        <div className = "form">
            <button className="homeButton" onClick={clickHandlerForHome}>Back to Home</button>
            <div>
                <img alt="pizza" src={pizza} className="pizzaImage"/>
            </div>
            <h1>Build Your Own Pizza</h1>
            <form onSubmit = {onSubmit}>
                <div style={{color:'red'}}>
                    <p>{errors.customerName}</p>
                    <p>{errors.city}</p>
                    <p>{errors.code}</p>
                    <p>{errors.houseNumber}</p>
                    <p>{errors.streetAddress}</p>
                    <p>{errors.size}</p>
                    <p>{errors.sauce}</p>
                    <p>{errors.instructions}</p>
                </div>
                <h2>Choice of Size</h2>
                <p>Required</p>
                <label className="labels">
                    <select value = {form.size} onChange={change} name="size">
                        <option value = "1">--Select Size--</option>
                        <option value = "Small">Small</option>
                        <option value = "Medium">Medium</option>
                        <option value = 'Large'>Large</option>
                        <option value = 'Extra Large'>Extra Large</option>
                    </select>
                </label>
                <h2>Choice of Sauce</h2>
                <p>Required</p>
                {/*Giving each radio button the same name will prevent them from being selected simultaenously*/}
                <label>
                    <input onChange = {change} checked={form.sauce === 'Original Red'} value = "Original Red" name="sauce" type = 'radio'/>
                    Original Red
                </label>
                <label> 
                    <input onChange = {change} checked={form.sauce === 'Garlic Ranch'} value = "Garlic Ranch" name ="sauce" type = 'radio'/>
                    Garlic Ranch
                </label>
                <label> 
                    <input onChange = {change} checked={form.sauce === 'BBQ Sauce'} value = "BBQ Sauce" name = "sauce" type = 'radio'/>
                    BBQ Sauce
                </label>
                <label> 
                    <input onChange = {change} checked={form.sauce === 'Spanish Alfredo'} value = "Spanish Alfredo" name = "sauce" type = 'radio'/>
                    Spinach Alfredo
                </label>
                <h2>Add Toppings</h2>
                <p>Choose up to 10</p>
                <label> 
                    <input onChange = {change} checked = {form.pepperoni} name = "pepperoni" type = 'checkbox'/>
                    Pepperoni
                </label>
                <label> 
                    <input onChange = {change} name = "sausage" checked = {form.sausage} type = 'checkbox'/>
                    Sausage
                </label>
                <label> 
                    <input onChange = {change} name = "canadianBacon" checked = {form.canadianBacon} type = 'checkbox'/>
                    Canadian Bacon
                </label>
                <label> 
                    <input onChange = {change} name = "italianSausage" checked = {form.italianSausage} type = 'checkbox'/>
                    Spicy Italian Sausage
                </label>
                <label> 
                    <input onChange = {change} name = "grilledChicken" checked = {form.grilledChicken} type = 'checkbox'/>
                    Grilled Chicken
                </label>
                <label> 
                    <input onChange = {change} name = "onions" checked = {form.onions} type = 'checkbox'/>
                    Onions
                </label>
                <label> 
                    <input onChange = {change} name = "greenPepper" checked = {form.greenPepper} type = 'checkbox'/>
                    Green Pepper
                </label>
                <label> 
                    <input onChange = {change} name = "dicedTomatoes" checked = {form.dicedTomatoes} type = 'checkbox'/>
                    Diced Tomatoes
                </label>
                <label> 
                    <input onChange = {change} name = "blackOlives" checked = {form.blackOlives} type = 'checkbox'/>
                    Black Olives
                </label>
                <label> 
                    <input onChange = {change} name = "roastedGarlic" checked = {form.roastedGarlic} type = 'checkbox'/>
                    Roasted Garlic
                </label>
                <label> 
                    <input onChange = {change} name="artichokeHearts" checked = {form.artichokeHearts} type = 'checkbox'/>
                    Artichoke Hearts
                </label>
                <label> 
                    <input onChange = {change} name="threeCheese" checked = {form.threeCheese} type = 'checkbox'/>
                    Three Cheese
                </label>
                <label> 
                    <input onChange = {change} name="pineapple" checked = {form.pineapple} type = 'checkbox'/>
                    Pineapple
                </label>
                <label> 
                    <input onChange = {change} name = "extraCheese" checked = {form.extraCheese} type = 'checkbox'/>
                    Extra Cheese
                </label>
                <h2>Special Instructions</h2>
                <label>
                    <textarea onChange = {change} value = {form.instructions} name="instructions" type = 'text' placeholder="Anything else you'd like to add?"/>
                </label>
                <label className="labels">
                    <select onChange = {change} value = {form.quantity} name="quantity">
                        {orderQty.map((order) => {
                            return <option value = {order} key={order}>{order}</option>
                        })}
                    </select>
                </label>
                <h2>Delivery Details</h2>
                <p>Required Fields</p>
                <label> Full Name :
                    <input onChange = {change} value = {form.customerName} name="customerName" type = 'text' placeholder="Enter full name"/>
                </label>
                <label> House / Apt # :
                    <input onChange = {change} value = {form.houseNumber} name="houseNumber" type = 'text' placeholder="Enter House / Apt No."/>
                </label>
                <label> Street Address :
                    <input onChange = {change} value = {form.streetAddress} name="streetAddress" type = 'text' placeholder="Enter Street Name"/>
                </label>
                <label> City :
                    <input onChange = {change} value = {form.city} name="city" type = 'text' placeholder="Enter City Name"/>
                </label>
                <label> Postal Code :
                    <input onChange = {change} value = {form.code} name="code" type = 'number' placeholder="Enter Postal Code"/>
                </label>
                <button disabled = {disabled} className="orderButton">{disabled ? "Fill Order Details" : `Submit - Order Total $${17.99 * form.quantity}`}</button>
            </form>
        </div>
    )
}

export default Form;