import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logoutUser } from '../actions/userActions';


const Navbar = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const cartState = useSelector((state) => state.cartReducer);
    const userState = useSelector((state) => state.loginUserReducer);

    const { currentUser } = userState;
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

                            {
                                currentUser ?
                                    (
                                        <>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                                style={{ color: 'black' }}
                                            >
                                                {currentUser?.name}
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem onClick={() => window.location.href = '/orders'}>orders</MenuItem>
                                                <MenuItem onClick={() => dispatch(logoutUser())}>Logout</MenuItem>
                                            </Menu>
                                        </>
                                    )
                                    :
                                    (
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="/login">Login</a>
                                        </li>
                                    )
                            }

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
