import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  })

  const login = () => {
    const user = {
      email,
      password
    }
    dispatch(loginUser(user));
  };
  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
          <h2 className='text-center m-2 registerText'>Login</h2>

          {loading && (<Loading />)}
          {error && (<Error error="Invalid Credentials" />)}
          <div>
            <input
              type='text'
              required
              value={email}
              placeholder='Enter email address'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='text'
              required
              value={password}
              placeholder='Enter your password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={login} className='btn mt-3'>Login</button>
            <Typography style={{ cursor: 'pointer' }} className='mt-2' onClick={() => navigate('/register')}>Clear Here To Register</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen