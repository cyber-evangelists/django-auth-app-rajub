import React from 'react'

const Signup = () => {
  return (
    <div className='center'>
        <div className="container">
        <h2 className="heading">Sign up</h2>
    <form className="border rounded p-4 bg-light">
    <div className="form-group">
      <label for="exampleInputEmail1">Name</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputEmail1">Address</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div className="form-group">
    <a href="/forgot-password">Forgot Password?</a>
  </div>
  <div className="d-flex justify-content-center">
    <button type="submit" className="btn btn-primary ">Submit</button>
    </div>
  </form>
  </div>
  </div>
  )
}

export default Signup