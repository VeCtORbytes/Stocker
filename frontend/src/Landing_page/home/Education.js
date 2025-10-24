import React from 'react'

function Education() {
    return ( 
 <div className='container mt-3'>
    <div className='row'>
        <div className='col-6'>
            <img style={{width:"90%"}} src='Media/images/education.svg'/>
        </div>
        
        <div className='col-6 p-5'>
            <h2 className='mb-3 fs-2'>Free and open market education</h2>
            <p className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href=''style={{textDecoration:'none'}}> Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
            <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a className='mt-3' href=''style={{textDecoration:'none'}}> TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
    </div>
 </div>
     );
}

export default Education;