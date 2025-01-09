
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './component/Spinner';
import usegif from './hooks/Gif';
    
    
    
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 
    
    const Random = () => {
    
    
      // const[gif,setGif]=useState('');
      // const[loading,setLoading]=useState(false);
    
      // async function fetchData(){
      //   setLoading(true);
      //   // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      //   const url=`https://api.giphy.com/v1/gifs/random?api_key=HUEspZLBC42tT6muOmVc8DFOKxKd2YhU`
      //   const {data} =await axios.get(url);
      //   // const output=await axios.get(url);
      //   // const output=axios.length(url);
      //   // console.log(output)
    
      //   const imageSource =data.data.images.downsized_large.url;
      //   // console.log(imagesSource);
      //   setGif(imageSource);
      //   setLoading(false);
      //  }
      
      // useEffect( () => {
      //   fetchData();
      // },[] )
      

      const{gif, loading, fetchData}=usegif();

      function clickHandler(){
        fetchData();
      }
      
    
      return (
        <div className='w-1/2 bg-green-500 rounded-lg border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
          <h1 className='mt-[15px] text-2xl underline uppercase font-bold' >A Random GIFS</h1>
    
    
          {
            loading ? (<Spinner/>) : (<img src={gif} width="300" />)
          }
          
    
          <button onClick={clickHandler}
          className='mb-[20px]  w-10/12 bg-yellow-500 text-lg- py-2 
          rounded-lg'>
            Generate
          </button>
        </div>
      )
    }
  
    export default Random;

