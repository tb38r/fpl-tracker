

"use client"

import TimeComponent from "./TimeComponent";
import PositionComponent from "./PositionComponent";
import HeaderComponent from "./HeaderComponent";
import ResultsComponent from "./BaseComponent";
import { useState} from "react";
import { SortedByPoints, TopEight } from "../utils/helpers";




export default function Home(props) {


let sortedByPoints = SortedByPoints(props.apiData)
console.log('sbp', sortedByPoints);
let res = []
let count = 1
for (const item of sortedByPoints) {
  let gwArr = []
  for (const gwItem of item) {
    for (const staticItem of props.static.elements) {

    if (gwItem.id === staticItem.id){
      let data ={}
     data.id = staticItem.id
     data.points = gwItem.stats.total_points
     data.position = staticItem.element_type
     data.name = staticItem.web_name
     data.team = props.static.teams.filter((val)=> val.code === staticItem.team_code) 
  gwArr.push(data)
    }

    }
      
    }
    res.push(gwArr)
    //console.log('gwitem', gwItem);
  }

  console.log('Res??', res);

let Top8 = TopEight(sortedByPoints)
console.log('Top8', Top8);

console.log('static', props.static);

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

     <ResultsComponent test='hello'/>
   


    </div>

    
  )
}


