"use client";

import TimeComponent from "./TimeComponent";
import PositionComponent from "./PositionComponent";
import HeaderComponent from "./HeaderComponent";
import ResultsComponent from "./ResultsComponent";
import { useEffect, useState } from "react";
import {
  SortedByPoints,
  SortedByPosition,
  SortedWithValues,
  GetThreeWeekAverage,
  GetFiveWeekAverage,
  SortPlayersByPoints,
} from "../utils/helpers";

export default function Home(props) {
  let sortedByPoints = SortedByPoints(props.apiData);

  let pointsCopy = structuredClone(sortedByPoints)
 // console.log('sortedbypoints -->', sortedByPoints);
  let sortedWithValues = SortedWithValues(sortedByPoints, props.static);
  let sortedByPosition = SortedByPosition(sortedWithValues);
   console.log('sortedbyposition', sortedByPosition);

 let sortedByPositionCopy =  SortedByPosition(sortedWithValues)
 console.log('COPY', sortedByPositionCopy);


 let threeWeekAverage = GetThreeWeekAverage(sortedByPositionCopy);


GetFiveWeekAverage( SortedByPosition(sortedWithValues))
  

  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);
  const [dataForResults, setDataForResults] = useState([]);


  
  // Sort players in each category by age
  const sorted3WGoalkeepers = SortPlayersByPoints(
    threeWeekAverage,
    "goalkeepers"
  );
  const sorted3WDefenders = SortPlayersByPoints(threeWeekAverage, "defenders");
  const sorted3WMidfielders = SortPlayersByPoints(
    threeWeekAverage,
    "midfielders"
  );
  const sorted3WForwards = SortPlayersByPoints(threeWeekAverage, "forwards");





  useEffect(() => {
    if (activeIndex === "1") {
      if (activePositionIndex ==="1") {
        setDataForResults(sorted3WGoalkeepers.slice(0,8));
      }
      if (activePositionIndex === "2") {
        setDataForResults(sorted3WDefenders.slice(0,8));
      }
      if (activePositionIndex === "3") {
        setDataForResults(sorted3WMidfielders.slice(0,8));
      }

      if (activePositionIndex === "4") {
        setDataForResults(sorted3WForwards.slice(0,8));
      }
    }
   // console.log("From useEffect API -->", activePositionIndex);
   //   console.log("From useEffect AI -->", activeIndex);

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ activeIndex, activePositionIndex]);

  return (
    <div className="container h-full mx-auto flex flex-col ">
      <HeaderComponent />
      <div className="h-1/4 pt-6 flex flex-col justify-evenly">
        <div className="h-1/11 grid gap-4 grid-cols-3 h-20">
          <TimeComponent
            time="3"
            index="1"
            activeIndex={activeIndex}
            handleComponentClick={setActiveIndex}
          />
          <TimeComponent
            time="5"
            index="2"
            activeIndex={activeIndex}
            handleComponentClick={setActiveIndex}
          />
          <TimeComponent
            time="10"
            index="3"
            activeIndex={activeIndex}
            handleComponentClick={setActiveIndex}
          />
        </div>

        <div className="grid gap-1 grid-cols-4 grid-rows-1 h-20 ">
          <PositionComponent
            position="GOALKEEPER"
            index="1"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
          <PositionComponent
            position="DEFENDERS"
            index="2"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
          <PositionComponent
            position="MIDFIELDERS"
            index="3"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
          <PositionComponent
            position="FORWARDS"
            index="4"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
        </div>
      </div>

      <ResultsComponent data={dataForResults} />
    </div>
  );
}
