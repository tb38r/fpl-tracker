

"use client"

import TimeComponent from "./components/TimeComponent";
import PositionComponent from "./components/PositionComponent";
import OuterShell from "./components/OuterShell";
import HeaderComponent from "./components/HeaderComponent";
import { useState } from "react";


export default function Home() {
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

      <div className="h-2/5 grid gap-2 grid-cols-4 pt-20">
      <OuterShell surname= 'Lawal' score='12.8'  teamname="newcastleunited"/>
      <OuterShell surname= 'Mutungi' score='10.3'  teamname="manchesterunited"/>
      <OuterShell surname= 'Million' score='10.4'  teamname="tottenham"/>


      </div>
   


    </div>

    
  )
}