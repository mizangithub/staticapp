
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  
  //const [data, setData] = useState('');
  
 // const data = "Test...data ... ";


  const [ loading, setLoading ] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () =>{
      setLoading(true);

      try {
      
        const {data: response} = await axios.get('/api/testapi');

        console.log("This is a test.. api call..");

        setData(response);

      } 
      catch (error) {
        console.error(error.message);
      }
      
      setLoading(false);
    }

    fetchData();
  }, []);



  

  return <div>
            <h4>Test App with integrated api: {data}</h4>    
         </div>;
}

export default App;
