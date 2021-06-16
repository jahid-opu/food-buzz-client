import React, { useEffect, useState } from 'react';
import './ManageFood.css';

const ManageFood = () => {
    const [foods, setFood] = useState([]);
    useEffect(() => {
       reload();
    },[])

    const reload = () =>{
            fetch('https://immense-everglades-90084.herokuapp.com/foods')
            .then(response => response.json())
            .then(data => setFood(data));
    }

    const handleDelete = (id) =>{
        fetch(`https://immense-everglades-90084.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(response=>response.json())
        .then(result =>{
            console.log(result);
            reload();
        })
    }
    return (
        <div className='manageFood'>
            {
                foods.map(food =><li>
                   <h6> {food.name} </h6>
                   <h6> ${food.price} </h6>
                    <button className="btn btn-primary"onClick={ () =>handleDelete(food._id)}>Delete</button>
                    </li>)
                    
            }
        </div>
    );
};

export default ManageFood;