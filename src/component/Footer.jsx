import React from 'react';
import {circle} from '../assets'
import {T} from '../assets'
import "./styles.css"

const Footer = () => {
  return (
    <React.Fragment>
      <div style={{backgroundColor:'blue', marginTop:'300px'}}>
         <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-1"></div>
                  <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                     <img src={circle} alt="" style={{position:'relative', left:'10px',top:'100px'}}/><img src={T} style={{position:'absolute', left:'36px',top:'110px'}}/>
                       <h5 style={{color:'white',marginLeft:'75px',marginTop:'65px'}}><b>Trafalgar</b></h5>
                       <p style={{color:'white',marginTop:'30px',marginLeft:'30px'}}>Trafalgar provides progressive, and affordable<br/> healthcare, accessible on mobile and online<br/> 
                       for everyone</p>
                       <p style={{color:'white',marginLeft:'30px'}}>©Trafalgar PTY LTD 2020. All rights reserved</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                    <h5 style={{color:'white',marginLeft:'30px',marginTop:'110px'}}><b>Company</b></h5>
                       <p style={{color:'white',marginTop:'25px',marginLeft:'30px'}}>About<br/>Testimonials<br/>Find a doctor<br/> Apps</p>
                       </div>
                       <div className="col-sm-12 col-md-12 col-lg-2">
                    <h5 style={{color:'white',marginLeft:'30px',marginTop:'110px'}}><b>Region</b></h5>
                       <p style={{color:'white',marginTop:'25px',marginLeft:'30px'}}>Indonesia<br/> Singapore<br/> Hongkong<br/>Canada</p>
                    
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-2">
                    <h5 style={{color:'white',marginLeft:'30px',marginTop:'110px'}}><b>Help</b></h5>
                       <p style={{color:'white',marginTop:'25px',marginLeft:'30px'}}>Help center<br/> Contact support<br/> Instructions<br/> How it works</p>
                    </div>
                    </div>
                  <div className="col-sm-12 col-md-12 col-lg-1"></div>
              </div>
         </div>
      </div>

    </React.Fragment>
  )
}

export default Footer;
