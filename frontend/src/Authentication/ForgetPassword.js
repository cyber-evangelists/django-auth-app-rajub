import React, { useRef } from 'react'
import axios, { HttpStatusCode } from 'axios'
import './Login.css'
import { toast } from 'react-toastify';

const ForgetPassword = () => {
  const emailRef = useRef(null);

  async function handleForgetPassword() {
    try {
      const email = emailRef.current.value;
      const response = await axios.post('http://localhost:8000/forget_password/', {
        email,
      });
      if (response.status === HttpStatusCode.Ok) {
        toast('Email sent');
      } else {
        toast('Request failed');
      }
    } catch (e) {
      toast.error('Request failed');
    }
  }

  return (
    <div className='center'>
      <div className="container">
        <h2 className="heading">Forget Password</h2>
        <form className="border rounded p-4 bg-light">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref={emailRef} />
            <small id="emailHelp" class="form-text text-muted mt-3">We'll never share your email with anyone else.</small>
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <button type="button" class="btn btn-primary" onClick={handleForgetPassword}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword