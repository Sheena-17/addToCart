import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardsData";
import { useState } from 'react';
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { Fragment } from 'react';

export const Cards = () => {
    const [data, setData] = useState(CardsData);
    const dispatch = useDispatch();
    const send = (elementData) =>{
            console.log("Element detail is",elementData);
            dispatch(ADD(elementData));
    }
    return (
        <> <h2 className="text-center mt-2">Add to cart Project</h2>
            <div className="container mt-5">
                <div className='row d-flex justify-content-center align-items-center'>
                    {data.map((element) => {
                        return (
                            <Fragment key = {element.id}>
                                <Card style={{ width: '22rem', border: "none" }} className='mx-2 mt-5 card_style'>
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            Price: ₹ {element.price}
                                        </Card.Text>
                                        <div className='row'>
                                            <Button variant="primary" style={{ width: "col-lg-12" }} onClick={()=>send(element)}>Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
        </>
    )
}