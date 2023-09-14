import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  

       <div className="flex flex-col min-w-[50%] w-full max-h-[100%]  background items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-4xl font-bold 
      mt-[40px] px-10 py-2 mx-auto text-center
      ">RANDOM GIFS </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
      <Random></Random>
      <Tag></Tag>

      </div>
   
   
      
    </div>
    );
}
