"use client";

import TimeComponent from "./TimeComponent";
import PositionComponent from "./PositionComponent";
import HeaderComponent from "./HeaderComponent";
import ResultsComponent from "./ResultsComponent";
import { useEffect, useState } from "react";
import {
  SortedByPoints,
  SortedByPosition,
  GetLastXElements,
  SortedWithValues,
  GetThreeWeekAverage,
  SortPlayersByPoints,
} from "../utils/helpers";

export default function Home(props) {
  let sortedByPoints = SortedByPoints(props.apiData);
  let sortedWithValues = SortedWithValues(sortedByPoints, props.static);
  let sortedByPosition = SortedByPosition(sortedWithValues);
  let threeWeekAverage = GetThreeWeekAverage(sortedByPosition);

  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);
  const [dataForResults, setDataForResults] = useState([]);

  //console.log("Three week average  only ", threeWeekAverage);

  // Sort players in each category by age
  const sortedGoalkeepers = SortPlayersByPoints(
    threeWeekAverage,
    "goalkeepers"
  );
  const sortedDefenders = SortPlayersByPoints(threeWeekAverage, "defenders");
  const sortedMidfielders = SortPlayersByPoints(
    threeWeekAverage,
    "midfielders"
  );
  const sortedForwards = SortPlayersByPoints(threeWeekAverage, "forwards");

  // Resulting sorted objects
   //console.log("GKs Sort", sortedGoalkeepers);
  // console.log("DFs Sort", sortedDefenders);
  // console.log("Mfs Sort", sortedMidfielders);
  // console.log("FWs Sort", sortedForwards);

  useEffect(() => {
    console.log("From useEffect AI -->", activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === "1") {
      if (activePositionIndex ==="1") {
        setDataForResults(sortedGoalkeepers.slice(0,3));
      }
      if (activePositionIndex === "2") {
        setDataForResults(sortedDefenders.slice(0,3));
      }
      if (activePositionIndex === "3") {
        setDataForResults(sortedMidfielders.slice(0,3));
      }

      if (activePositionIndex === "4") {
        setDataForResults(sortedForwards.slice(0,3));
      }
    }
   // console.log("From useEffect API -->", activePositionIndex);
  }, [activePositionIndex]);

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
