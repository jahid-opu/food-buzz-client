import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css';

const CheckOut = () => {
    const {id} = useParams();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [order,setOrder] = useState({});
    const [name,setName] = useState(null);
    useEffect(() => {
        const url = `http://localhost:5000/food/${id}`
        fetch(url) 
        .then(response=>response.json())
        .then(data =>{
            const date = new Date();
            setName(data.name);
            const orderData = {...loggedInUser,name: data.name, price:data.price, imageURL:data.imageURL, date};
           
            console.log(name);
            setOrder(orderData);
        })
    },[])


    const postOrder = () => {
        fetch('http://localhost:5000/addOrder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(result =>{
            console.log(result);
        })
        order.name=null;
    }
    if (order.name) {
        postOrder();
    }

    return (
        <div className="checkOut-area">
            <p>Dear {order.userName}, Thanks for your orders, You have purchased: </p>
            <img style={{width:"50px"}} src={order.imageURL} alt="" />
            <h5>Name: {name}</h5>
            <h5>Price: ${order.price}</h5>
            
        </div>
    );
};

export default CheckOut;