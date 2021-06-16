import React, { useState } from 'react';
import AddFood from '../AddFood/AddFood';
import ManageFood from '../ManageFood/ManageFood';
import './Admin.css';


const Admin = () => {
    const [manageFood, setManageFood] = useState(false);
    const handleManageFood = () => {
        const isManageFood = true;
        setManageFood(isManageFood);
    }
    const handleAddFood = () => {
        const isManageFood = false;
        setManageFood(isManageFood);
    }
    return (
        <div>
            <aside className="sidebar">
                <h3>Dashboard</h3>
                <div className="devider"></div>
                <h5 className="admin-btn" onClick={handleManageFood}>Manage Foods</h5>
                <h5 onClick={handleAddFood} className="admin-btn">Add Foods</h5>
            </aside>
            <aside className="display-area">
                { manageFood ? <ManageFood/>
                : <AddFood />
                    
                }
            </aside>
        </div>
    );
};

export default Admin;