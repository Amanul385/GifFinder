import React, { useEffect, useState } from 'react'
import axios from 'axios'


const url=`https://api.giphy.com/v1/gifs/random?api_key=epO54Z0K51C7LmutmMhRG9ou0wdknl3C`

const Gif = (tag) => {


  const[gif,setGif]=useState('');
  const[loading,setLoading]=useState(false); 

  async function fetchData(tag){
    setLoading(true);
    
    const {data} =await axios.get(tag ? `${url}&tag=${tag}` :url);
    
    const imageSource =data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
   }
  
  useEffect( () => {
    fetchData('car');
  },[] )


  return {gif, loading, fetchData};
  
}

export default Gif  