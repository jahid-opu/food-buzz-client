import React from 'react';
import { CardDeck,Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Food.css';

const Food = ({ food }) => {
    const history = useHistory()
    const handleClick = (id) => {
        console.log(id);
        const url = `checkout/${id}`;
        history.push(url);
    }
    return (
        // <div className="cards">
        //     <img src={food.imageURL} alt="" />
        //     <h5>{food.name}</h5>
        //     <button onClick={() => handleClick(food._id)}>Buy Now</button>
        <CardDeck>
            <Card className="cards">
                <Card.Img variant="top" className="card-img" src={food.imageURL} />
                <Card.Body>
                    <Card.Title>{food.name}</Card.Title>
                    {/* <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text> */}
                </Card.Body>
                <Card.Footer>
                    <span style={{display: 'flex', justifyContent: 'space-between'}}>
                <button className="btn btn-primary"onClick={() => handleClick(food._id)}>Buy Now</button>
                <h6>${food.price}</h6></span>
                </Card.Footer>
            </Card>
            </CardDeck>
        // </div>
    );
};

export default Food;