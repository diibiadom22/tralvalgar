import React from 'react'
import {line1} from '../assets'
import {guy} from '../assets'
import {arroy1} from '../assets'
import {dot} from '../assets'
import {arroy2} from '../assets'

import './styles.css'

const Cards = () => {
  return (
    <React.Fragment>
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
          <div className="col-sm-12 col-md-12 col-lg-10 bg-primary dry" style={{borderRadius:'20px', height:'400px'}}>
              <div className="text-center">
                  <h2 style={{color:'white', marginTop:'40px'}}>What our customers are saying</h2>
                  <img src={line1} alt="" className='lines'/>
                  </div>
              <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-3"> 
                     <img src={guy} alt="" className='guys' />
                 </div>
                 <div className="col-sm-12 col-md-12 col-lg-3">
                         <h5 style={{color:'white', marginTop:'100px'}}>Edward Newgate</h5> 
                         <p style={{color:'white', marginTop:'10px'}}>Founder Circle</p>
                  </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <p style={{color:'white', marginTop:'90px'}}>“Our dedicated patient engagement app and<br/>
                            web portal allow you to access information<br/> 
                            instantaneously (no tedeous form, long calls,<br/> 
                             or administrative hassle) and securely”
                      </p>
                 </div>
              </div>
            </div>
            <div className='arrow-line mt-4'>
              <img src={arroy1} alt="" className='' />
              <img src={dot} alt="" className='ml-5'/>
              <img src={arroy2} alt=""className='ml-5' />
            </div>
          <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  )
}

export default Cards