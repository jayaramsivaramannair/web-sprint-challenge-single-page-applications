import React from 'react';

const Home = () => {
    return (
        <div className = "home">
            <h1>Lambda Eats</h1>
            <div className="heroContainer">
                <h1>Will Code For Pizza!</h1>
                <p>Need Refueling?</p>
                <button className="pizzaOrder">
                    Order Pizza
                </button>
            </div>
        </div>
    )
}

export default Home;