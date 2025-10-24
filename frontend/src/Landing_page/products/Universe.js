import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="Media/images/smallcaseLogo.png" style={{ width: "65%" }} />
          <p className="text-small text-muted mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images/streakLogo.png" style={{ width: "45%" }} />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images/sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images/goldenpiLogo.png" style={{ width: "50%" }} />
          <p className="text-small text-muted mt-3">Bonds Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="Media/images/dittoLogo.png" style={{ width: "30%" }} />
          <p className="text-small text-muted mt-3 ">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="Media/images/zerodhaFundhouse.png"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
