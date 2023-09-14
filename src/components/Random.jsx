import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import React from "react";
import useGif from "../hooks/useGif";
const API_KEY = 'ZzQC5PLa153EtmmiiyQtR4PkY7XntlNt';
const Random = () => {

  const [ tag,setTag]= useState();
  function clickHandler() {
    fetchData();
  }
// const [loading ,setLoading] = useState(false);
  const {gif,loading,fetchData} = useGif(tag);
  return (
    <div className="w-[50%]  bg-green-500 rounded-lg border border-black flex flex-col items-center 
gap-y-5 mt-[15px]" >

      <h1 className="font-bold underline uppercase text-2xl mt-[15px]">A Random Gif</h1>
     {
      loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
     }
     
      <button className="font-bold bg-[aqua] opacity-30 w-10/12 border rounded-lg mb-[20px]"
      onClick={clickHandler}> Generate</button>
    </div>
  );
};

export default Random;
