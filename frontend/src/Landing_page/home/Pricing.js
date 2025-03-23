import React from 'react'

function Pricing() {
    return ( 
<div className='container p-3'>
    <div className='row '>
        <div className='col-5 '>
            <h2 className='mb-3'>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a style={{textDecoration:'none'}} href=''>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>

        <div className='col-7 p-3 mt-3'>
            <div className='row mx-3'>
                <div style={{display:'inline-flex'}} className='col-4'>
                    <img style={{width:'65%'}} src='Media/images/pricing0.svg'/>
                    <p className='fs-6 text-muted' >Free account opening</p>
                   
                  
                </div>
                <div className='col-4' style={{display:'inline-flex'}}>
                    <img style={{width:'65%'}} src='Media/images/pricingEquity.svg'/>
                    <p className='fs-6 text-muted'>Direct mutual funds </p>
               
                </div>
                <div className='col-4' style={{display:'inline-flex'}}>
                    <img style={{width:'65%'}} src='Media/images/intradayTrades.svg'/>
                    <p className='fs-6 text-muted'>Intraday and F&O</p>
                   
                   
                </div>
            </div>
        </div>
    </div>
</div>
     );
}

export default Pricing;