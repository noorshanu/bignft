import React from "react";
import Clock from "../../assets/timer.png";

function Card() {
  return (
    <>
      <div className="card-box">
        <div className="card-content">
          <h1>BUY $BIGNFTS ON PRESALE</h1>
          <p className="symbol">1 $BIGNFTS = $1</p>

          <div className="bar">
            <div>bar</div>
            <p>
              Progress <span>48%</span>(23,750,345/50,000,000)
            </p>
            <div className="d-flex justify-content-center gap-4">
              <a href="/" className="connect-btn">Connect Wallet</a>
              <a href="/" className="how"> HOW TO BUY</a>
            </div>
            <div className="d-flex justify-content-center ">
              <img src={Clock} alt="" />
              <p>10 DAYS, 15 HOURS, 43 MINUTES, 05 SECONDS remaining</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
