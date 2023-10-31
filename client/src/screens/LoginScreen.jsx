import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if(localStorage.getItem('currentUser')) {
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
        <div className='col-md-5 mt-5 textCenter'>
          <h2 className='text-center m-2 registerText'>Login</h2>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen