import { useState } from 'react';
import TimeComponent from "./components/timeComponent";
"use client"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleComponentClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto flex-auto">
      <header className="p-7 text-sky-400 h-1/5 text-4xl font-bold text-center">FPL TRACKER</header>
      <div className= "grid gap-4 grid-cols-3 grid-rows-1">
        <TimeComponent time="One" index={0} activeIndex={activeIndex} handleComponentClick={handleComponentClick} />
        <TimeComponent time="Two" index={1} activeIndex={activeIndex} handleComponentClick={handleComponentClick} />
        <TimeComponent time="Three" index={2} activeIndex={activeIndex} handleComponentClick={handleComponentClick} />
      </div>
    </div>
  )
}