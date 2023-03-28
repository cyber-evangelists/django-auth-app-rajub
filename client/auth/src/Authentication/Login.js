import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='center'>
         <div className="container">
        <h2 className="heading">Login</h2>
    <form className="border rounded p-4 bg-light">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div className='d-flex justify-content-center'>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
  )
}

export default Login