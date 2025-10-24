import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import API from "../../API/axios"; // ✅ Import centralized API
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
=======
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
>>>>>>> origin/master
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { login } = useAuth();

=======
>>>>>>> origin/master
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
<<<<<<< HEAD
  
=======
>>>>>>> origin/master
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
<<<<<<< HEAD
    
=======
>>>>>>> origin/master
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      // ✅ Use centralized API
      const { data } = await API.post("/signup", {
        email,
        password,
        username,
      });
      
      const { success, message, user } = data;
      if (success) {
        handleSuccess(message);
        login(user);
=======
      const { data } = await axios.post(
        "https://stocker-1-backend.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
>>>>>>> origin/master
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
<<<<<<< HEAD
      handleError(error.response?.data?.message || "Something went wrong!");
    }
    
    setInputValue({
=======
      console.log(error);
    }
    setInputValue({
      ...inputValue,
>>>>>>> origin/master
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container mt-5">
<<<<<<< HEAD
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span className="linkText">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
=======
    <h2>Signup Account</h2>
    <form onSubmit={handleSubmit}>
      <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter your username"
          onChange={handleOnChange}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Submit</button>
      <span className="linkText">
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </form>
    <ToastContainer />
  </div>

  
  );
  
>>>>>>> origin/master
};

export default Signup;