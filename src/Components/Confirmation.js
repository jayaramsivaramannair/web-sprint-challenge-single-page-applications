import React from 'react';
import {useHistory} from 'react-router-dom';

const Confirmation = () => {

    const history = useHistory();
    const clickHandlerForPizza = () => {
        history.goBack();
    }
    const clickHandlerForHome = () => {
        history.push('/');
    }

    return (
        <div className = "confirmation">
            <h2>Hello from Confirmation!</h2>
            <p>Your Fresh Pizza is on its way!</p>
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