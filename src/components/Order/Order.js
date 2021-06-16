import React from 'react';
import './Order.css'
import { Table } from 'react-bootstrap';


const Order = ({order}) => {
    return (
    <tr>
      <td><img style={{height:"50px"}} src={order.imageURL} alt="" /></td>
      <td><h6>{order.name}</h6></td>
      <td><h6>${order.price}</h6></td>
      <td><h6>{new Date(order.date).toDateString('dd/MM/yyyy')}</h6></td>
    </tr>

    );
};

export default Order;