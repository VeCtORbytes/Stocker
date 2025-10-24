import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/signup';
import Login from './Landing_page/Login/Login';
import AboutPage from './Landing_page/About/AboutPage';
import ProductPage from './Landing_page/products/ProductPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import SupportPage from './Landing_page/Support/SupportPage';
import NotFound from './Landing_page/NotFound';
import NavBar from './Landing_page/NavBar';
import Footer from './Landing_page/Footer';
<<<<<<< HEAD
import 'react-toastify/ReactToastify.css';
import {AuthProvider} from './context/AuthContext';


=======
import 'react-toastify/ReactToastify.css'
>>>>>>> origin/master



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider>
         <BrowserRouter>
 <NavBar/>
<<<<<<< HEAD
 <AuthProvider>
    <App />
 </AuthProvider>
=======
>>>>>>> origin/master
 <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/product" element={<ProductPage />} />
  <Route path="/pricing" element={<PricingPage />} />
  <Route path="/support" element={<SupportPage />} />
  
 
  <Route path="/*" element={< NotFound/>} />
  </Routes>
  <Footer/>
 </BrowserRouter>
    </CookiesProvider>

);

