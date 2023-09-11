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
  GetThreeWeekAverage,
} from "../utils/helpers";

export default function Home(props) {
  let sortedByPoints = SortedByPoints(props.apiData);
  let sortedWithValues = SortedWithValues(sortedByPoints, props.static);
  let sortedByPosition = SortedByPosition(sortedWithValues);

  console.log("SortedByPosition", sortedByPosition);

  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);

  console.log("Last 3", GetLastXElements(sortedByPosition, 3));

  console.log(
    "Three week average  only ",
    GetThreeWeekAverage(sortedByPosition)
  );

  const inputObject = {
    a: {
      2: { name: 'x', age: 20 },
      3: { name: 't', age: 37 },
    },
    b: {
      4: { name: 'b', age: 24 },
      5: { name: 'z', age: 29 },
    },
  };
  
  // Step 1: Convert the nested object structure into an array of objects
  const arrayOfObjects = [];
  for (const outerKey in inputObject) {
    for (const innerKey in inputObject[outerKey]) {
      arrayOfObjects.push(inputObject[outerKey][innerKey]);
    }
  }
  
  // Step 2: Sort the array based on the age property
  arrayOfObjects.sort((a, b) => b.age - a.age);
  
  // Step 3: Create a new object with the sorted data
  const sortedObject = {};
  for (let i = 0; i < arrayOfObjects.length; i++) {
    const item = arrayOfObjects[i];
    const outerKey = Object.keys(inputObject).find((key) => {
      return Object.keys(inputObject[key]).some((innerKey) => {
        return inputObject[key][innerKey].name === item.name;
      });
    });
  
    if (!sortedObject[outerKey]) {
      sortedObject[outerKey] = {};
    }
  
    sortedObject[outerKey][i + 2] = item;
  }
  
  console.log('sorted object', sortedObject);






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
