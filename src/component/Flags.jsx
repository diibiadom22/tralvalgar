import React ,{useState , useEffect} from "react";
 
const Flags = () => {
    const [count, setCount] = useState(5);
    const [data, setData] = useState([]);
    
        const increase = () => {
            setCount(count - 1)
        }
    // fetch approach
    const getCountriesAndFlags = () => {
      const countryHead = new Headers();
      countryHead.append("Content-type", "application/json");
    
      const counMethod = {
        method: 'GET',
        headers: countryHead
      };
    
      const url = "https://countriesnow.space/api/v0.1/countries/flag/images";
    
      fetch(url, counMethod)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        const data = result.data;
        setData(data);
      })
      .catch(error => console.log('error', error));
    }
    
    // using axios
    
    // async function getCountriesAndFlags() {
    //   try {
    //     const response = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
    //     const data = await response.data.data;
    //     setData(data);
    //   } catch (error) {
    //     console.error('Error fetching data', error)
    //   }
    // }
    
    useEffect(() => {
      getCountriesAndFlags();
    }, [])
    
      return (
        <>
        <div>
          <div>
            <p>Count: {count}</p>
              <button onClick={increase} >Increment</button>
            </div>
        </div>
        
          <div className="row ">
            {data.map((item) => 
              <div className="col-sm-12 col-md-12 col-lg-4" key={item.id}>
                <div className="image-head">
                  <img src={item.flag} alt="" className='w-100'/>
                  <p>{item.name}</p>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }
    
export default Flags;
