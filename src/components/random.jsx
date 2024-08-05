import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './spinner'
// import dotenv from 'dotenv'
//  dotenv.config()
// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
//const API_KEY='nJpv9XIGfpxDNIOGXFvQm8fjrw4F2vkz'
const Random = () => {
    
    const [gif,setGif]=useState('');
     const [spinner,setSpinner]=useState('false')
    //const spinner=false;
    async function fetchData(){
        setSpinner(true)
        const url=`https://api.giphy.com/v1/gifs/random?api_key=nJpv9XIGfpxDNIOGXFvQm8fjrw4F2vkz`;
        const {data}= await axios.get(url);
        const imgSource=data.data.images.downsized_large.url;
        setGif(imgSource)                                                 
        //console.log("problem is here")
        //console.log(data);
        setSpinner(false)
    }
    useEffect(()=>{
        fetchData();
    },[])
    function clickHandler(){
        fetchData();
    }
  return (
    <div className='w-1/2  bg-green-500 mt-[20px] rounded-2xl border border-black '>
        <h1 >random gif</h1>
        {
            spinner ? (<Spinner/>):(<img src={gif} width="450" height="400" />)
        }
        {/* <img src={gif} width="450" height="400" /> */}
        
        <form onSubmit={clickHandler}><button  className='bg-blue-700 w-full mt-[20px] rounded-2xl'>generate</button></form>
    </div>
  )
}

export default Random