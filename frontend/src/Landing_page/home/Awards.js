import React from 'react'

function Awards() {
    return ( 
      <div className='container'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src='Media/images/largestBroker.svg'/>
            </div>
            <div className='col-6 mt-3 p-5'>
                <h1>Largest Stock Broker in India</h1>
                <p className='mb-5'>2+ million Zeroddha clients contribute to over 15% of all retail order volume in India daily by trading and investing in :</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>
                            <p>Futures in options</p>
                            </li>
                            <li>
                            <p>Commodity derivatives</p>
                            </li>
                            <li>
                            <p>Currency derivatives</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>
                                <p>Stocks & IPOs</p>
                            </li>
                            <li>
                                <p>Direct mutual funds</p>
                            </li>
                            <li>
                                <p>Bonds and Government Securities</p>
                            </li>
                        </ul>
                       
                    </div>
                    <img style={{width:"90%"}}  src='Media/images/pressLogos.png'/>
                </div>
              
            </div>
        </div>
      </div>
     );
}

export default Awards ;