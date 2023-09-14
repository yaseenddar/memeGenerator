import axios from "axios";
import { useEffect, useState } from "react";
// This is custom hook
const API_KEY = 'ZzQC5PLa153EtmmiiyQtR4PkY7XntlNt';
const url =` https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag){
    const [loading ,setLoading] = useState(false);

    const [gif, setGif] = useState('');
  async function fetchData(tag){
    setLoading(true);
     const {data} = await axios.get( tag ?`${url}&tag=${tag}`: url);
     const imageSource = data.data.images.downsized_large.url;
     console.log(data)
   setLoading(false);
  setGif(imageSource);
  }
  useEffect( () =>{
    fetchData('car');
  },[]) 
 return {gif,loading,fetchData};
}
export default useGif;