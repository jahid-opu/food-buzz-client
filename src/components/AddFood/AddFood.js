import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddFood = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageUrl] = useState(null);
    const [isSubmited,setIsSubmited] = useState(false);
    const onSubmit = data => {
        const foodData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        }
        console.log(foodData);

        const url = `http://localhost:5000/addFood`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(foodData)
        })
        .then(response =>console.log('server responsed',response))

        document.getElementById("name").value= '';
        document.getElementById("price").value= '';
        document.getElementById("img").value= '';
        setIsSubmited(true);
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a4eb966ac76c6b59719e1a529adae7d6');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }
    return (
        <div style={{width:"80%"}}>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <h6>Add Your Foods here:</h6>
                <input className="form-control" id="name" placeholder="Food Name" {...register("name")} />
                <br />
                <input className="form-control" id="price" placeholder="Price" {...register("price")} />
                <br />
                <input className="form-control" id="img" type="file" onChange={handleImageUpload} />
                <br />

                <input className="btn btn-primary" type="submit" />
                <br/><br/>
                {isSubmited && <p style={{color: 'green'}}>Food uploaded successfully</p>}
            </Form>
        </div>
    );
};

export default AddFood;