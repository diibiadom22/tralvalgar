import React from 'react'
import {image1} from '../assets'
import Divide from './Divide'
import './styles.css'

const Health = () => {
return(
<React.Fragment>
 <div className='row'> 
     <div className ="col-sm-12 col-md-12 col-lg-1"></div>
     <div className ="col-sm-12 col-md-12 col-lg-10">
         <div className="row">
              <div className ="col-sm-12 col-md-12 col-lg-6 ">
             <img src={image1} alt="" className='wid'/>
              </div>
             <div className ="col-sm-12 col-md-12 col-lg-6 try ">
                    <h2 className=''><b>Leading healthcare<br/> providers</b></h2>
                    <Divide/>
                 <p style={{color:'#7D7987'}}>Trafalgar provides progressive, and affordable<br/> healthcare,       accessible on mobile and online for <br/>everyone. To us, it’s not just work. We take pride<br/> 
                         in the solutions we deliver
                 </p>
                  <button className='btn-4 btn-outline-primary'>Learn more</button>
              </div>
         </div>  
     </div>
     <div className ="col-sm-12 col-md-12 col-lg-1"></div> 
 </div>     
</React.Fragment>
)
}
export default Health