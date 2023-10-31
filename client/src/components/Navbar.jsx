import React from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const cartState = useSelector((state) => state.cartReducer);
    return (
        <div className='shadow-lg'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-dark" href="/">Pizza Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse power" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    Cart {cartState?.cartItems?.length}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
