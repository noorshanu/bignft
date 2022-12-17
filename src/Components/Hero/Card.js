import React from "react";
import Clock from "../../assets/timer.png";

function Card() {
  return (
    <>
      <div className="card-box">
        <div className="card-content">
          <h1>BUY $BIGNFTS ON PRESALE</h1>
          <p>1 $BIGNFTS = $1</p>

          <div className="bar">
            <div>bar</div>
            <p>
              Progress <span>48%</span>(23,750,345/50,000,000)
            </p>
            <div className="d-flex">
              <a href="/">Connect Wallet</a>
              <a href="/"> HOW TO BUY</a>
            </div>
            <div className="d-flex">
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
