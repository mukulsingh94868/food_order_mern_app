import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cardActions';

const Pizza = ({ pizza }) => {
    const dispatch = useDispatch();
    const [quantity, setQunatity] = useState(1);
    const [varient, setVarient] = useState('small');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addtocart = () => {
        dispatch(addToCart(pizza, quantity, varient));
    };
    return (
        <>
            <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>

                <div onClick={handleShow}>
                    <h1>{pizza?.name}</h1>
                    <img src={pizza?.image} style={{ height: '200px', width: '200px' }} className='img-fluid' alt="" />
                </div>

                <div className='flex-container'>
                    <div className='w-100 m-1'>
                        <p>Varients</p>
                        <select className='form-control' value={varient} onChange={(e) => setVarient(e.target.value)}>
                            {
                                pizza?.varients?.map((varient, index) => {
                                    return (
                                        <option value={varient} key={index}>
                                            {varient}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='w-100 m-1'>
                        <p>prizes</p>
                        <select className='form-control' value={quantity} onChange={(e) => setQunatity(e.target.value)}>
                            {[...Array(10)?.keys()]?.map((x, i) => {
                                return (
                                    <option value={i + 1} key={i}>
                                        {i + 1}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>

                <div className='flex-container'>
                    <div className='m-1 w-100'>
                        <h1 className='mt-1'>Price: {pizza.prices[0][varient] * quantity}Rs</h1>
                    </div>

                    <div className='m-1 w-100'>
                        <button className='btn' onClick={addtocart}>Add to Cart</button>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{pizza?.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img className='img-fluid' src={pizza?.image} alt="" style={{ height: '400px' }} />
                        <p>{pizza?.description}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className='btn' onClick={handleClose}>CLOSE</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>

    )
}

export default Pizza
