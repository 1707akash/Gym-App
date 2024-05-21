

import React, { useEffect, useState } from 'react'
import Chain from '../assets/Chain.avif'
import CurlImg from '../assets/CurlImg.jpg'
import DeadLift from '../assets/DeadLift.jpg'
import PullDown from '../assets/PullDown.jpg'
import PullImg from '../assets/PullImg.webp'
import axios from 'axios'
import './Hero.css'

const Hero = () => {
  const[apiData, setApiData]= useState(null)
  const[gymData, setGymdata] = useState(null);
  const [searchValue, setSeachValue] = useState('')

 
  const fetchData = async()=>{
    const apiKey = '26fec1c686mshef65bb3b9cdf379p1ebed5jsn21d763a2af41';
    const response = await axios.get(
      'https://exercisedb.p.rapidapi.com/exercises',
      {
        params: {
          limit:'30'
        },
        headers:{
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      }
    )
    const data = response.data;
    setApiData(data)
    setGymdata(data)
  }


  useEffect(()=>{
    fetchData()
  },[searchValue])

  const onClickHandler =()=>{
    // setGymdata(apiData);
    let searchKey = searchValue;
    let filteredList = gymData.filter((elem)=>{
      return (
        elem.bodyPart.toLowerCase().includes(searchKey.toLowerCase())
      )
    })

    setGymdata(filteredList)
    
  }

  




  return (
    <div className='hero'>
    <h1>Where Fitness Meets Fun and Results Are Achieved</h1>
    <div className="heroImgDiv">
    <div className="heroLeft">
    <div className="leftTop">
    <img src={CurlImg} alt="CurlImg" />
    <img src={PullImg} alt="PullImg" />
    </div>
    <img className='bigImg' src={PullDown} alt="PullDown" />
    </div>

    <div className="heroRight">
    <img className='bigImg' src={DeadLift} alt="DeadLift" />
    <div className="rightBottom">
    <img src={PullImg} alt="PullImg" />
    <img src={Chain} alt="Chain" />
    </div>
    </div>
    </div>

    {/* ..........HERE IS IMAGE RENDERING.........  */}

    <div className='exerciseDiv'>
    <label htmlFor="">Seach Body part: </label>
    <input type="text" id='part' value={searchValue} onChange={(e)=>setSeachValue(e.target.value)} />
    <button onClick={onClickHandler} >Search</button>

    <div className="allExercise">
    {
      gymData && gymData.map((elem,index)=>(
        <div className='exerciseCard'>
        <img src={elem.gifUrl} alt="" />
        <p>{elem.name}</p>
        <p>{elem.bodyPart}</p>
        </div>
        
      ))
    }
    </div>
    
    </div>
    
    </div>


  )
}

export default Hero
