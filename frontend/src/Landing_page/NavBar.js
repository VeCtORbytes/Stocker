import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../API/axios"; // ✅ Use centralized API

function NavBar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await API.post("/"); // ✅ Use API instance with withCredentials
        const { status, user } = data;
        
        if (status) {
          setUsername(user.username || user); // ✅ Handle both formats
          setIsLoggedIn(true);
          setShowWelcome(true);
          setTimeout(() => {
            setShowWelcome(false);
          }, 3000);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error verifying cookie:", error);
        setIsLoggedIn(false);
      }
    };
    
    verifyCookie();
  }, []); // ✅ Run once on mount

  const Logout = async () => {
    try {
      await API.post("/logout"); // ✅ Call logout endpoint
      setIsLoggedIn(false);
      setUsername("");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still logout on frontend even if backend fails
      setIsLoggedIn(false);
      setUsername("");
      navigate("/login");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            style={{ width: "25%" }}
            src="Media/images/logo.svg"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {showWelcome && username && (
          <div className="welcome-message">Welcome, {username}!</div>
        )}
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : null}
              
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              
              {isLoggedIn && username && (
                <li className="nav-item">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-user"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu">
                        <li>
                          <div className="ml-5">
                            <button 
                              style={{border:"none", textAlign:'center'}} 
                              onClick={Logout}
                            >
                              Logout
                            </button>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;