// import TimeComponent from "./components/timeComponent";


// export default function Home() {
//  // const [activeIndex, setActiveIndex] = useState(null);


//   return (
//     <div className="container mx-auto flex-auto">
//       <header className="p-7 text-sky-400 h-1/5 text-4xl font-bold text-center">FPL TRACKER</header>
//       <div className= "grid gap-4 grid-cols-3 grid-rows-1">
//         <TimeComponent time="3"  />
//         <TimeComponent time="5"  />
//         <TimeComponent time="10"  />
//       </div>
//     </div>
//   )
// }

"use client"

import TimeComponent from "./components/timeComponent";
import { useState } from "react";


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto flex-auto">
      <header className="p-7 text-sky-400 h-1/5 text-4xl font-bold text-center">FPL TRACKER</header>
      <div className= "grid gap-4 grid-cols-3 grid-rows-1">
        <TimeComponent time="3" index= '1' activeIndex={activeIndex} handleComponentClick={setActiveIndex} />
        <TimeComponent time="5" index= '2' activeIndex={activeIndex} handleComponentClick={setActiveIndex} />
        <TimeComponent time="10" index= '3' activeIndex={activeIndex} handleComponentClick={setActiveIndex} />
      </div>
    </div>
  )
}