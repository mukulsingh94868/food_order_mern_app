import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Loading from '../components/Loading';
import Success from '../components/Success';
import Error from '../components/Error';


const RegisterScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const registerState = useSelector((state) => state.registerUserReducer);
    const { error, loading, success } = registerState;

    const register = () => {
        if (password !== cpassword) {
            alert('Password are not matched')
        } else {
            const user = {
                name,
                email,
                password
            }
            dispatch(registerUser(user));
        }
    };
    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>

                    {loading && (<Loading />)}
                    {success && (<Success success="User Registered Successfully" />)}
                    {error && (<Error error="Email Already Registered" />)}

                    <h2 className='text-center m-2 registerText'>Register</h2>
                    <div>
                        <input
                            type='text'
                            required
                            value={name}
                            placeholder='name'
                            className='form-control'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type='text'
                            required
                            value={email}
                            placeholder='email'
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='text'
                            required
                            value={password}
                            placeholder='password'
                            className='form-control'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type='text'
                            required
                            value={cpassword}
                            placeholder='confirm password'
                            className='form-control'
                            onChange={(e) => setCPassword(e.target.value)}
                        />

                        <button onClick={register} className='btn mt-3'>Register</button>
                        <Typography style={{ cursor: 'pointer' }} className='mt-2' onClick={() => navigate('/login')}>Clear Here To Login</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen