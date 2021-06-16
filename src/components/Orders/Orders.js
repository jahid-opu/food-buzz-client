import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Order from '../Order/Order';
import { Table } from 'react-bootstrap';
import './Orders.css';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [])
    return (
        <div className="order-table">
            <h5>Hello {loggedInUser.userName}, Your order list is here:</h5>
            <Table striped bordered hover variant="primary">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Food Name</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
            {
                orders.map(order => <Order order={order}></Order>)
            }
            </thead>
             </Table>
        </div>
    );
};

export default Orders;