import React, {useState, useEffect} from "react";
  
const Contact = () => {
    const [data, setData] = useState([]);

    const getCountryPopulation = () =>{
        const countryPop = new Headers();
        countryPop.append("content-type", "application/json");

        const counMethod = {
           method:'Get',
           headers: countryPop     
            };

            const url = "https://countriesnow.space/api/v0.1/countries/population/cities"
            fetch(url,counMethod)
            .then(response => response.json())
            .then(result=>{
                console.log(result)
                const data = result.data;
                setData(data);

                
            })
            .catch(error => console.log('error', error));
        }
        useEffect(() => {
            getCountryPopulation();
        },[])
    
  
    return (
        <React.Fragment>
          <div className="row">
            {data.map((item)=>
            <div className="col-sm-12 col-md-12 col-lg-4" key={item.id}>
                <div className="card-body">
                    <p>{item.country}</p>
                    <p>{item.city}</p>
                    {item.populationCounts.map((population) =>
                    <p>{population.year}: {population.value}:{population.sex}</p>
                    )}
              </div>
         </div>
       )}
          </div>
        </React.Fragment>
    )
}
     export default Contact;
