import React, { useRef } from 'react'
import axios, { HttpStatusCode } from 'axios';

import { toast } from 'react-toastify';

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function handleSignUp() {
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const response = await axios.post('http://localhost:8000/register/', {
        email,
        password,
      });
      if (response.status === HttpStatusCode.Ok) {
        toast('Sign Up Successful');
      } else {
        toast('Sign up failed');
      }
    } catch (e) {
      toast.error('Sign up failed');
    }
  }

  return (
    <div className='center'>
      <div className="container">
        <h2 className="heading">Sign up</h2>
        <form className="border rounded p-4 bg-light">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={emailRef} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordRef} />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary" onClick={handleSignUp}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup