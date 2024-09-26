import React from 'react'
import {image} from '../assets'
import { vector } from '../assets'
import Divide from './Divide'
import './styles.css'

const DownLoad = () => {
return(
<React.Fragment>
 <div className='row'> 
     <div className ="col-sm-12 col-md-12 col-lg-1"></div>
     <div className ="col-sm-12 col-md-12 col-lg-10">
         <div className="row troy">
         <div className ="col-sm-12 col-md-12 col-lg-6 trap">
                    <h2 className=''><b>Download our <br/> mobile apps</b></h2>
                    <Divide/>
                 <p style={{color:'#7D7987'}}>Our dedicated patient engagement app and <br/>web portal allow you to access information<br/>
                  instantaneously (no tedeous form, long calls,<br/> or administrative hassle) and securely </p>
                  <button className='btn-4 btn-outline-primary'>Learn more <img src={vector} alt="" className=''/></button>
              </div>

              <div className ="col-sm-12 col-md-12 col-lg-6 ">
             <img src={image} alt="" className='apps'/>
              </div>
             
         </div>  
     </div>
     <div className ="col-sm-12 col-md-12 col-lg-1"></div> 
 </div>     
</React.Fragment>
)
}
export default DownLoad