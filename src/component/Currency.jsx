import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Currency = () => {
    const [country, setCountry] = useState('');
    const [data , setData] = useState([]);

    const Mention = () => { 
        setCountry(country + 1)
    }
       
    async function getCountriesCurrency () {
           try {
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/currency")
             const data = await response.data.data;
             setData(data);
           } catch (error) {
             console.error('Error fetching data', error)
           }
        }
        
         useEffect(() => {
            getCountriesCurrency();
        },[])

  return (
             
                   
  <div>
         <div className="row">
                 
            {data.map((item)=>
            <div className="col-sm-12 col-md-12 col-lg-6" key={item.id}>
                <div className="card-body">
                    <p>{item.name}</p>
                    <p>{item.currency}</p>
                      </div>
                      </div>
                      
                  )}  
            </div>
    
  
          </div>
                )}
  



export default Currency;

