import React from 'react'
import Clock from "../../assets/timer.png";

function PresaleCard() {
  return (
    <>
      <div className="card-box">
        <div className="card-content">
        <h1>BUY $BIGNFTS ON PRESALE</h1>
          <p className="symbol">1 $BIGNFTS = $1</p>

          <div className="bar">
            <div className="sub-bar"></div>
            </div>
            <p className="progress-1">
              Progress <span className="pr-num">48%</span>(23,750,345/50,000,000)
            </p>
        
            <div className="d-flex justify-content-center mt-10">
              <img src={Clock} alt=""  className="timer"/>
              <p className="count-down">
                <span className="num">10</span> DAYS,{" "}
                <span className="num">15</span> HOURS,{" "}
                <span className="num">45</span> MINUTES,{" "}
                <span className="num">10</span> SECONDS remaining
              </p>
            </div>
            <div className='club'>
                <div className='token-box'>


                </div>
                <div className='token-box-2'>

                </div>

            </div>
            </div>
        </div>
    </>
  )
}

export default PresaleCard