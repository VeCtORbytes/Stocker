import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom text-center mt-5 p-5 mb-5">
        <h1>Charges</h1>
        <p>List of all charges and taxes</p>
      </div>
      <div className="row mt-5 p-5">
        <div className="col text-center">
          <img  style={{width:"70%"}} src="Media/images/pricingEquity.svg" />
          <h2 className="fs-3 mt-3">Free equity delivery</h2>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col text-center">
          <img style={{width:"70%"}} src="Media/images/intradayTrades.svg" />
          <h2 className="fs-3 mt-3">Intraday and F&O trades</h2>
          <p className="mt-3 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center">
          <img  style={{width:"70%"}} src='Media/images/pricingMF.svg'/>
          <h2 className="fs-3 mt-3">Free direct MF</h2>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
