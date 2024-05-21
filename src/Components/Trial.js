import React, { useEffect } from 'react'
import axios from 'axios'

const Trial = () => {

    useEffect(()=>{
        const fetchData = async ()=>{
            // .................THIS IS METHOD-1................ 
            // const options = {
            //     method: 'GET',
            //     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
            //     params: {limit: '10'},
            //     headers: {
            //       'X-RapidAPI-Key': '26fec1c686mshef65bb3b9cdf379p1ebed5jsn21d763a2af41',
            //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            //     }
            //   };
              
            //   try {
            //       const response = await axios.request(options);
            //       console.log(response.data);
            //   } catch (error) {
            //       console.error(error);
            //   }


            // .....................THIS IS METHOD-2............... 
            // Syntax for GET data in APIs :- axios.get(api-url , config-object) 
            const apiKey ='26fec1c686mshef65bb3b9cdf379p1ebed5jsn21d763a2af41';
            const response = await axios.get(
                // 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=20'
                'https://exercisedb.p.rapidapi.com/exercises',
                {
                    params: {limit:'10',
                        offset:'5'
                    },
                    headers: {
                        'X-RapidAPI-Key': '26fec1c686mshef65bb3b9cdf379p1ebed5jsn21d763a2af41',
                        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                    }
                }
            )
              console.log(response.data);
        }
        // Syntax for GET data in APIs :- axios.get(api-url ,body-object,  config-object) 

        fetchData()
    },[])

    
  return (
    <div>
    <h1>Trial class</h1>
    {
        
    }

    

    </div>
  )
}

export default Trial