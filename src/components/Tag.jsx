import useGif from "../hooks/useGif";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import React from "react";
const Tag = () => {
  

const [ tag,setTag]= useState();

  function clickHandler() {
    fetchData();
  }

 function changeHandler(event)
 {
    setTag(event.target.value);
 }
 //this is the call for custom hook 
 const {gif,loading,fetchData} = useGif() ;
  return (
    <div className="w-[50%] h-[50%] bg-blue-500 rounded-lg border border-black flex  flex-col items-center 
gap-y-5 mt-[15px] mb-[50px]" >

      <h1 className="font-bold underline uppercase text-2xl mt-[15px]">Random {tag} Gif</h1>
     {
      loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
     }
      <input className="w-10/12 border rounded-lg mb-[3px] text-center"
      onChange={changeHandler} value={tag}></input>
      <button className="font-bold bg-[aqua] opacity-30 w-10/12 border rounded-lg mb-[20px]"
      onClick={clickHandler}> Generate</button>
    </div>
  );
};

export default Tag;
