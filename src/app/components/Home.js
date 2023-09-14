"use client";

import Time from "./Time";
import Position from "./Position";
import Header from "./Header";
import Results from "./Results";
import { useEffect, useState } from "react";
import {
  SortedByPoints,
  SortedByPosition,
  SortedWithValues,
  GetThreeWeekAverage,
  GetFiveWeekAverage,
  SortPlayersByPoints,
  GetTenWeekAverage,
} from "../utils/helpers";
import cloneDeep from "lodash.clonedeep";

export default function Home(props) {
  let sortedByPoints = SortedByPoints(props.apiData);
  let sortedWithValues = SortedWithValues(sortedByPoints, props.static);
  let sortedByPosition = SortedByPosition(sortedWithValues);

  let sortedByPositionCopy = cloneDeep(sortedByPosition);
  let copiedFiveParsed = JSON.parse(JSON.stringify(sortedByPosition));
  let copiedTenParsed = JSON.parse(JSON.stringify(sortedByPosition));

  let threeWeekAverage = GetThreeWeekAverage(sortedByPositionCopy);
  let fiveWeekAverage = GetFiveWeekAverage(copiedFiveParsed);
  let tenWeekAverage = GetTenWeekAverage(copiedTenParsed)


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

  /////

  const sorted5WGoalkeepers = SortPlayersByPoints(
    fiveWeekAverage,
    "goalkeepers"
  );
  const sorted5WDefenders = SortPlayersByPoints(fiveWeekAverage, "defenders");
  const sorted5WMidfielders = SortPlayersByPoints(
    fiveWeekAverage,
    "midfielders"
  );
  const sorted5WForwards = SortPlayersByPoints(fiveWeekAverage, "forwards");


  ///

  const sorted10WGoalkeepers = SortPlayersByPoints(
    tenWeekAverage,
    "goalkeepers"
  );
  const sorted10WDefenders = SortPlayersByPoints(tenWeekAverage, "defenders");
  const sorted10WMidfielders = SortPlayersByPoints(
    tenWeekAverage,
    "midfielders"
  );
  const sorted10WForwards = SortPlayersByPoints(tenWeekAverage, "forwards");




  ///
  useEffect(() => {
    if (activeIndex === "1") {
      if (activePositionIndex === "1") {
        setDataForResults(sorted3WGoalkeepers.slice(0, 8));
      }
      if (activePositionIndex === "2") {
        setDataForResults(sorted3WDefenders.slice(0, 8));
      }
      if (activePositionIndex === "3") {
        setDataForResults(sorted3WMidfielders.slice(0, 8));
      }

      if (activePositionIndex === "4") {
        setDataForResults(sorted3WForwards.slice(0, 8));
      }
    }

    if (activeIndex === "2") {
      if (activePositionIndex === "1") {
        setDataForResults(sorted5WGoalkeepers.slice(0, 8));
      }
      if (activePositionIndex === "2") {
        setDataForResults(sorted5WDefenders.slice(0, 8));
      }
      if (activePositionIndex === "3") {
        setDataForResults(sorted5WMidfielders.slice(0, 8));
      }

      if (activePositionIndex === "4") {
        setDataForResults(sorted5WForwards.slice(0, 8));
      }
    }

    if (activeIndex === "3") {
      if (activePositionIndex === "1") {
        setDataForResults(sorted10WGoalkeepers.slice(0, 8));
      }
      if (activePositionIndex === "2") {
        setDataForResults(sorted10WDefenders.slice(0, 8));
      }
      if (activePositionIndex === "3") {
        setDataForResults(sorted10WMidfielders.slice(0, 8));
      }

      if (activePositionIndex === "4") {
        setDataForResults(sorted10WForwards.slice(0, 8));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, activePositionIndex]);

  return (
    <div className="container h-full mx-auto flex flex-col justify-center ">
      <Header />
      <div className=" h-1/4 pt-6 flex flex-col justify-evenly">
        <div className="grid gap-4 grid-cols-3 h-20 ">
          <Time
            time="3"
            index="1"
            activeIndex={activeIndex}
            handleComponentClick={setActiveIndex}
          />
          <Time
            time="5"
            index="2"
            activeIndex={activeIndex}
            handleComponentClick={setActiveIndex}
          />
          <Time
            time="10"
            index="3"
            activeIndex={activeIndex}
            handleComponentClick={setActiveIndex}
          />
        </div>

        <div className="grid gap-1 grid-cols-4 grid-rows-1 h-20 ">
          <Position
            position="GOALKEEPER"
            index="1"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
          <Position
            position="DEFENDERS"
            index="2"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
          <Position
            position="MIDFIELDERS"
            index="3"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
          <Position
            position="FORWARDS"
            index="4"
            activeIndex={activePositionIndex}
            handleComponentClick={setActivePositionIndex}
          />
        </div>
      </div>

      <Results data={dataForResults} />
    </div>
  );
}
