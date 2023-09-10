"use client";

import TimeComponent from "./TimeComponent";
import PositionComponent from "./PositionComponent";
import HeaderComponent from "./HeaderComponent";
import ResultsComponent from "./BaseComponent";
import { useState } from "react";
import {
  SortedByPoints,
  SortedByPosition,
  TopEight,
  SortedWithValues,
} from "../utils/helpers";

export default function Home(props) {
  let sortedByPoints = SortedByPoints(props.apiData);
  let sortedWithValues = SortedWithValues(sortedByPoints, props.static);
  let sortedByPosition = SortedByPosition(sortedWithValues);

  console.log("sortedWithVals", sortedWithValues);
  console.log("SortedByPosition", sortedByPosition);

  function tallyCosts(arr) {
    // Create an empty object to store the tallied costs.
    const talliedCosts = {};

    // Loop through the array of arrays of objects.
    for (const arrayOfGWObjects of arr) {
      // Loop through the array of objects.
      for (const gwObj of arrayOfGWObjects) {
        
        /*
        id: 395
        name: "R.Varane"
        points: 14
        position: 2
        team: "Man Utd"
        */
       
       // Get the id of the object.
        const id = gwObj.id;

        // Get the cost of the object.
        const cost = object.cost;

        // If the id is not in the tallied costs object, add it with a cost of 0.
        if (!talliedCosts.hasOwnProperty(id)) {
          talliedCosts[id] = 0;
        }

        // Add the cost of the object to the cost in the tallied costs object.
        talliedCosts[id] += cost;
      }
    }

    // Return the tallied costs object.
    return talliedCosts;
  }

  // let Top8 = TopEight(sortedWithValues);
  // console.log("Top8", Top8);

  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);

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
