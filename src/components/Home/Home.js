import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Home.css';
import { Spinner } from 'react-bootstrap';


const Home = () => {
    const [foods, setFood] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods')
        .then(response => response.json())
        .then(data => setFood(data));
    },[])
    return (
        <div className="food-area">
            {
             foods[0] ? "" :
            <Spinner animation="border" variant="primary" />
            }
            {
                foods.map(food => <Food key={food._id} food={food}></Food>)
            }
        </div>
    );
};

export default Home;