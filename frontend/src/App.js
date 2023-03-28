import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css';
import ForgetPassword from "./Authentication/ForgetPassword";
import Signup from "./Authentication/Signup";
import Landing from "./Pages/Landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={(<Signup />)} />
          <Route path="/forget_password" element={(<ForgetPassword />)} />
          <Route path="/" element={(<Landing />)} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-left" />
    </>
  );
}

export default App;
