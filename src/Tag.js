import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Spinner from './component/Spinner';
import usegif from './hooks/Gif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

const Tag = () => {


  // const[gif,setGif]=useState('');
  // const[loading,setLoading]=useState(false);

  // async function fetchData(){
  //   setLoading(true);
  //   // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=HUEspZLBC42tT6muOmVc8DFOKxKd2YhU&tag=${tag}`
  //   const {data} =await axios.get(url);
  //   // const output=await axios.get(url);
  //   // const output=axios.length(url);
  //   // console.log(output)

  //   const imageSource =data.data.images.downsized_large.url;
  //   // console.log(imagesSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }
  
  // useEffect( () => {
  //   fetchData();
  // },[] )
  const[tag,setTag]=useState('car');
  const{gif, loading, fetchData}=usegif(tag);

  function clickHandler(){
    fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className='w-1/2 h-3/4 bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold' > Random {tag} GIFS</h1>


      {
        loading ? (<Spinner/>) : (<img src={gif} width="300" />)
      }
     
      
      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button onClick={ clickHandler} className='mb-[20px]  w-10/12 bg-yellow-500 text-lg- py-2 
      rounded-lg'>
        Generate
      </button>
    </div>
  )
}

export default Tag 