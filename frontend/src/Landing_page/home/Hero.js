import React from 'react'
import { Link } from 'react-router-dom';


function Hero() {



    return (  
      <div className='container p-5'>
        <div className='row text-center'>
       
         <img src='Media/images/homeHero.png' alt='Hero' className='mb-5' />
         <h1 className='mt-5'>Invest in Everything</h1>
         <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
         <Link to={"/signup"} className='p-2 btn btn-primary' style={{width:"20%", margin :"0 auto"}} >SignUp Now</Link>

        </div>
    
      </div>
    );
}

export default Hero;