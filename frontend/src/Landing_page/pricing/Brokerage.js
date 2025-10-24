import React from "react";

function Brokerage() {
  return (
    <div className="container ">
      <div className="row px-5">
        <p style={{ textAlign: "center" }}>
          <a style={{ textDecoration: "none", fontSize: "20px" }} href="">
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>
        <h2 style={{ fontSize: "24px" }}>Charges explained</h2>
      </div>

      <div className="row  p-5">
        <div className="col" style={{textAlign:"left", lineHeight:'1.6'}}>
          <p style={{ fontSize: "16px" }}>
            Securities/Commodities transaction tax
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p style={{ fontSize: "16px" }}>Transaction/Turnover Charges</p>
          <p className="text-muted mt-3" v>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <p style={{ fontSize: "16px" }}>Call & trade</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <p style={{ fontSize: "16px" }}>Stamp charges</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <p style={{ fontSize: "16px" }}>NRI brokerage charges</p>

          <p className="text-muted mt-3 mb-3" style={{ fontSize: "12px" }}>
            <p> •₹100 per order for futures and options.</p>
            <p>
              {" "}
              •For a non-PIS account,0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </p>
            <p>
              {" "}
              •For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
              <br />
              <br /> •₹500 + GST as yearly account maintenance charges (AMC)
              charges.
            </p>
          </p>
          <p style={{ fontSize: "16px" }}>Account with debit balance</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            <p>
              •Equity and Futures - ₹10 per crore + GST of the traded value.
            </p>
            <p>•Options - ₹50 per crore + GST traded value (premium value).</p>
            <p>
              • Currency- ₹0.05 per lakh + GST of turnover for Futures and ₹2
              per lakh + GST of premium for Options.
            </p>
          </p>
          <p style={{ fontSize: "16px" }}>Margin Trading Facility (MTF)</p>

          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            <p>
              {" "}
              • MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied from T+1 day until the day MTF stocks are
              sold.
            </p>
            <p>
              •MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </p>
            <p>•MTF pledge charge: ₹30 + GST per pledge request per ISIN.</p>
          </p>
        </div>

        <div className="col" style={{textAlign:"left", lineHeight:'1.6'}}>
          <p style={{ fontSize: "16px" }}>GST</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>

          <p style={{ fontSize: "16px" }}>SEBI Charges</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.Charged at ₹10 per crore + GST by
            Securities and Exchange Board of India for regulating the markets.
          </p>

          <p style={{ fontSize: "16px" }}>
            DP (Depository participant) charges
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <p style={{ fontSize: "16px" }}>Pledging charges</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <p style={{ fontSize: "16px" }}>AMC (Account maintenance charges)</p>

          <p className="text-muted mt-3 mb-3" style={{ fontSize: "12px" }}>
            <p>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, Click here
            </p>
            <p>
              {" "}
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, Click here
            </p>
          </p>
          <p style={{ fontSize: "16px" }}>Corporate action order charges</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <p>Off-market transfer charges</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            <p>₹25 per transaction.</p>
          </p>
          <p style={{ fontSize: "16px" }}>Physical CMR request</p>

          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            <p>
              {" "}
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
          </p>

          <p style={{ fontSize: "16px" }}>Payment gateway charges</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            <p> ₹9 + GST (Not levied on transfers done via UPI)</p>
          </p>

          <p style={{ fontSize: "16px" }}>Delayed Payment Charges</p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            <p>
              {" "}
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. Learn more.
            </p>
          </p>
          <p style={{ fontSize: "16px" }}>
            Trading using 3-in-1 account with block functionality
          </p>
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            <p> •Delivery & MTF Brokerage: 0.5% per executed order.</p>
            <p> •Intraday Brokerage: 0.05% per executed order.</p>
          </p>
        </div>

      </div>

      <div className="row text-muted p-5" style={{textAlign:"left", lineHeight:'1.8'}}>
        <p style={{ fontSize: "16px" }}>Disclaimer</p>
        <p style={{ fontSize: "12px" }}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
