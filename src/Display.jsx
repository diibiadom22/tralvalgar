import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Services from './component/Services'
import Health from './component/Health'
import DownLoad from './component/DownLoad'
import Cards from './component/Cards'
import Check from './component/Check'
import Footer from './component/Footer'
import Contact from './component/Contact'
import Diibia from './component/Diibia'
import Flags from './component/Flags'
import Currency from './component/Currency'

const Display = () => {
    return(
        <div>
         <BrowserRouter>   
        <Navbar/>
        <Routes>
        <Route index element={<Hero/>} />  
        <Route path='/service' element={<Services/>} />
        <Route path='/health' element={<Health/>} />
        <Route path='/download' element={<DownLoad/>} />
        <Route path='/cards' element={<Cards/>} />
        <Route path='/check' element={<Check/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/diibia' element={<Diibia/>}/>
        <Route path='/flags' element={<Flags/>}/>
        <Route path='/currency' element={<Currency/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
    )
}
export default Display
