

"use client"

import TimeComponent from "./TimeComponent";
import PositionComponent from "./PositionComponent";
import HeaderComponent from "./HeaderComponent";
import BaseBody from "./BaseComponent";
import { useState} from "react";
import { SortedByPoints, TopEight } from "../utils/helpers";




export default function Home(props) {


let sortedByPoints = SortedByPoints(props.apiData)
console.log('sbp', sortedByPoints);

let Top8 = TopEight(sortedByPoints)
console.log('Top8', Top8);


  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);
 



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


