import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './styles.css'

const Navbar =() => {
    return (
  <React.Fragment>
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-1"></div>
    <div className="col-sm-12 col-md-12 col-lg-10">
      <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="flags/">Home <span className="sr-only">(current)</span></Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/service">Find a doctor <span className="sr-only">(current)</span></Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="/contact">APP <span className="sr-only">(current)</span></Link>
                </li><li className="nav-item">
                  <Link className="nav-link" to="currency/">Testimonials <span className="sr-only">(current)</span></Link>
                </li><li className="nav-item ">
                  <Link className="nav-link" to="/diibia">About us <span className="sr-only">(current)</span></Link>
                </li>
              </ul>
    
            </div>
          </nav>
    </div>
    <div className="col-sm-12 col-md-12 col-lg-1"></div>

        </div>
    
   
  </React.Fragment>
    )
 }
 export default Navbar