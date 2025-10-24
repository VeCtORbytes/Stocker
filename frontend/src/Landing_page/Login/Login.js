import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../API/axios"; // ✅ Import centralized API
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
   const { login } = useAuth();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  
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
    
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Use centralized API (withCredentials already set)
      const { data } = await API.post("/login", {
        email,
        password,
      });
      
      console.log(data);
      const { success, message, user} = data;
      
      if (success) {
        handleSuccess(message);
         login(user);
        setTimeout(() => {
          navigate("/");
          window.location.reload(); 
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Login failed. Please try again.");
    }
    
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="form_container mt-5">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-3">
          <label htmlFor="email">Email</label>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          &nbsp; &nbsp; &nbsp;
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Create Account <Link to={"/signup"} style={{textDecoration:"none"}}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;