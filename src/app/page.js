

"use client"

import TimeComponent from "./components/TimeComponent";
import PositionComponent from "./components/PositionComponent";
import OuterShell from "./components/OuterShell";
import HeaderComponent from "./components/HeaderComponent";
import BaseBody from "./components/BaseComponent";
import { useState, useEffect} from "react";
import  useSWR  from "swr";

const URL = "https://fantasy.premierleague.com/api/event/1/live/"
const fetcher = url => fetch(URL).then(r => r.json())

// export async function getServerSideProps (){
  
//     const response = await fetch("https://fantasy.premierleague.com/api/event/1/live/");
//     const data = await response.json();
    
//     console.log(data);

//     return{
//       props:{
//         data
//       }
//     }
// }


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);
 
  const { data, error, isLoading } = useSWR(URL, fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>



  return (
    
    <div className="container h-full mx-auto flex flex-col ">
      <HeaderComponent/>
      <div className="h-1/4 pt-6 flex flex-col justify-evenly">
      <div className= "h-1/11 grid gap-4 grid-cols-3 h-20">
        <TimeComponent time="3" index= '1' activeIndex={activeIndex} handleComponentClick={setActiveIndex} />
        <TimeComponent time="5" index= '2' activeIndex={activeIndex} handleComponentClick={setActiveIndex} />
        <TimeComponent time="10" index= '3' activeIndex={activeIndex} handleComponentClick={setActiveIndex} />
      </div>

      <div className= "grid gap-1 grid-cols-4 grid-rows-1 h-20 ">
        <PositionComponent position="GOALKEEPER" index= '1' activeIndex={activePositionIndex} handleComponentClick={setActivePositionIndex} />
        <PositionComponent position="DEFENDERS" index= '2' activeIndex={activePositionIndex} handleComponentClick={setActivePositionIndex} />
        <PositionComponent position="MIDFIELDERS" index= '3' activeIndex={activePositionIndex} handleComponentClick={setActivePositionIndex} />
        <PositionComponent position="FORWARDS" index= '4' activeIndex={activePositionIndex} handleComponentClick={setActivePositionIndex} />

      </div>
      </div>

     <BaseBody test='hello'/>
   


    </div>

    
  )
}


