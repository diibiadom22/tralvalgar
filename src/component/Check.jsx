import React from "react";
import Divide from "./Divide";
import RightArow from "./RightArow";
import {lab1} from '../assets'
import {lab2} from '../assets'
import {lab3} from '../assets'
import "./styles.css"


const Check = () => {
return(
<React.Fragment>
  <div className="row">
       <div className="col-sm-12 col-md-12 col-lg-1"></div>
     <div className="col-sm-12 col-md-12 col-lg-10">
         <div className="check-head  text-center" style={{marginTop:'200px'}}> 
            <h3><b>Check out our latest article</b></h3>
            <div>
              <Divide/>
            </div>
         </div>
         
         <div className="row mt-5" >
              <div className="col-sm-12 col-md-12 col-lg-4 "  style={{ boxShadow: 'rgba(14, 30, 37, 0.25) 0px 2px 4px 0px , rgba(14, 30, 37, 0.25) 0px 2px 16px 0px', height:'512px', borderRadius:'20px'}}> 
                  <img src={lab1} alt=""  className="w-100" style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px', }}/>
                  <h5 className="ml-3 mt-3"><b>Disease detection, check <br/> up in the laboratory</b></h5>
                  <p style={{color:'#7D7987',marginLeft:'16px'}}>In this case, the role of the health<br/> laboratory is very important to do<br/> a disease detection...</p>
                  <p style={{color:'blue',marginLeft:'16px'}}>Read more <RightArow/></p> 
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{ boxShadow: 'rgba(14, 30, 37, 0.25) 0px 2px 4px 0px , rgba(14, 30, 37, 0.25) 0px 2px 16px 0px', height:'512px', borderRadius:'20px'}}> 
                  <img src={lab2} alt=""  className="w-100" style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}}/>
                  <h5 className="ml-3 mt-3"><b>Herbal medicines that are <br/>safe for consumption</b></h5>
                  <p style={{color:'#7D7987',marginLeft:'16px'}}>Herbal medicine is very widely used<br/> at this time because of its very good<br/> for your health...</p>
                  <p style={{color:'blue',marginLeft:'16px'}}>Read more  <RightArow/></p> 
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4"  style={{ boxShadow: 'rgba(14, 30, 37, 0.25) 0px 2px 4px 0px , rgba(14, 30, 37, 0.25) 0px 2px 16px 0px', height:'512px', borderRadius:'20px'}}> 
                  <img src={lab3} alt=""  className="w-100" style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}}/>
                  <h5 className="ml-3 mt-3"><b>Natural care for healthy<br/>facial skin</b></h5>
                  <p style={{color:'#7D7987',marginLeft:'16px'}}>A healthy lifestyle should start from<br/> now and also for your skin health.<br/> There are some...</p>
                  <p style={{color:'blue',marginLeft:'16px'}}>Read more  <RightArow/></p> 
                </div>
                <button className='btn-4 btn-outline-primary' style={{marginLeft:'450px',marginTop:'100px'}}>View all</button>
         </div>
     </div>
     <div className="col-sm-12 col-md-12 col-lg-1"></div>
 </div>
</React.Fragment>
)
}
export default Check