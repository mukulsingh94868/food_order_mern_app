import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

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
                <div className='col-md-5 mt-5 textCenter'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen