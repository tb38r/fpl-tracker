"use client";

import TimeComponent from "./TimeComponent";
import PositionComponent from "./PositionComponent";
import HeaderComponent from "./HeaderComponent";
import ResultsComponent from "./BaseComponent";
import { useEffect, useState } from "react";
import {
  SortedByPoints,
  SortedByPosition,
  GetLastXElements,
  SortedWithValues,
  Round
} from "../utils/helpers";

export default function Home(props) {
  let sortedByPoints = SortedByPoints(props.apiData);
  let sortedWithValues = SortedWithValues(sortedByPoints, props.static);
  let sortedByPosition = SortedByPosition(sortedWithValues);

  console.log("sortedWithVals", sortedWithValues);
  console.log("SortedByPosition", sortedByPosition);

  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);

  console.log("Last 3", GetLastXElements(sortedByPosition, 3));

  function GetThreeWeekAverage(arrOfObj) {
    //first slice
    const data = GetLastXElements(sortedByPosition, 3);
    if (data.length === 0) {
      throw "Data object of insufficent length";
    }

    let result = {};
    let defenders = {};

    //iterate throught last array

    //defence
    for (let key in data[2].defenders) {
      if (
        data[1].defenders.hasOwnProperty(key) &&
        data[0].defenders.hasOwnProperty(key)
      ) {
        defenders[key] = data[2].defenders[key];
        defenders[key].points =
         Round( (data[2].defenders[key].points +
            data[1].defenders[key].points +
            data[0].defenders[key].points) /
          3, 1)
      }
    }
    result.defenders = defenders;
    return defenders;
  }


  console.log('Three week average defenders only ', GetThreeWeekAverage(sortedByPosition));

  useEffect(() => {
    console.log("From useEffect AI -->", activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    console.log("From useEffect API -->", activePositionIndex);
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

      <ResultsComponent test="hello" />
    </div>
  );
}
