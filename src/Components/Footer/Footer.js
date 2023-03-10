import React from 'react'
import './Footer.css'
import Img1 from '../../assets/fin.png'
import Img2 from '../../assets/seen.png'
import Img3 from '../../assets/mint.png'
import Img4 from '../../assets/crypto.png'
import Img5 from '../../assets/zone.png'
import Img6 from '../../assets/b2c.png'
import Img7 from '../../assets/eth.png'
import Img8 from '../../assets/coin.png'

function Footer() {
  return (
    <>
    <div className='container justify-content-center'>
        <div className='mob-header text-center'>
            <h1>AS SEEN ON:</h1>

        </div>
        <div className='footer'>
            <div className='hide-mob' >
                <img src={Img2} alt=""/>
            </div>
            <div >
                <img src={Img3} alt="" className='img3'/>
            </div>
            <div >
                <img src={Img4} alt="" className='img3'/>
            </div>
            <div >
                <img src={Img1} alt="" className='img3'/>
            </div>
            <div >
                <img src={Img5} alt="" className='img3'/>
            </div>
            <div >
                <img src={Img6} alt="" className='bt2'/>
            </div>
            <div >
                <img src={Img7} alt="" className='eth'/>
            </div>
            <div >
                <img src={Img8} alt="" className='img3 eth2'/>
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Footer