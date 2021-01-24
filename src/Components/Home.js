import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className = "home">
            <div className="heroContainer">
                <h1>Hungry Coder = Bad Code</h1>
                <p>You Need Refueling</p>
                <Link to="/pizza">
                    <button className="pizzaOrder">
                        Order Pizza
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;