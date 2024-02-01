"use client";

import Time from "./Time";
import Position from "./Position";
import Header from "./Header";
import Results from "./Results";
import BestByValue from "./BestByValue";
import { useEffect, useState } from "react";
import {
  SortedByPoints,
  SortedByPosition,
  SortedWithValues,
  GetThreeWeekAverage,
  GetFiveWeekAverage,
  SortPlayersByPoints,
  GetTenWeekAverage,
  SortValueForMoney,
  getFirstXInstancesOfEachType,
  SortHotshot,
} from "../utils/_helpers";
import BBVPositional from "./BBV-Positional";
import cloneDeep from "lodash.clonedeep";
import { Footer } from "./Footer";
import { PlayerDataContext } from "../context/playerDataContext";
import Hotshots from "./Hotshots/Hotshots";

export default function Home(props) {
  const [playerContext, setPlayerContext] = useState("");
  const [bootStrapData, setBootStrapData] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {

    const fetchBootstrapData = async () => {
      setError(null);
  
      try {
        const response = await fetch('/api/get-bootstrap');
        const data = await response.json();
        setBootStrapData(data.elements);
      } catch (error) {
        setError("Error from fetchBootstrapData",error); // Display a user-friendly error message
      } 
    };

    fetchBootstrapData();
  
    let contextObj = {};
    let playerData = cloneDeep(props.playerData);
    let teamData = cloneDeep(props.staticData.teams);
    contextObj.playerData = playerData;
    contextObj.teamData = teamData;
    setPlayerContext(contextObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("This is the fetched BootStrapData", bootStrapData);
  console.log("This is the static data", props.staticData.elements);

  

  let DataForValueForMoney = cloneDeep(bootStrapData);

  SortValueForMoney(DataForValueForMoney);

  let sortedByPoints = SortedByPoints(props.apiData);
  let sortedWithValues = SortedWithValues(
    sortedByPoints,
    cloneDeep(props.staticData)
  );
  let sortedByPosition = SortedByPosition(sortedWithValues);

  let sortedByPositionCopy = cloneDeep(sortedByPosition);
  let copiedFiveParsed = cloneDeep(sortedByPosition);
  let copiedTenParsed = cloneDeep(sortedByPosition);

  let threeWeekAverage = GetThreeWeekAverage(sortedByPositionCopy);

  let fiveWeekAverage = GetFiveWeekAverage(copiedFiveParsed);
  let tenWeekAverage = GetTenWeekAverage(copiedTenParsed);

  const [activeIndex, setActiveIndex] = useState(1);
  const [activePositionIndex, setActivePositionIndex] = useState(1);
  const [dataForResults, setDataForResults] = useState([]);

  let sortedHotshots = SortHotshot(cloneDeep(sortedByPosition));

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

  useEffect(() => {
    setDataForResults(sorted3WGoalkeepers.slice(0, 8));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="container h-fit mx-auto flex flex-col max-w-screen-2xl	">
      <Header />

      <div className="container-body h-full">
        <div className=" dark-backgrd text-xs mt-2 results-title text-white font-bold flex justify-center bg-black md:text-base md:font-extrabold">
          Highest Average Points Earned Over the Selected Period
        </div>
        <div className=" h-1/5 md:h-36 pt-2 flex flex-col gap-1">
          <div className="time-element flex flex-row h-1/2 items-center">
            <div className=" dark-txt w-1/5 flex justify-center flex-col items-center text-black text-[8px] md:text-lg 'bg-gray-300' font-large font-bold">
              <span>Select a</span>time period
            </div>
            <div className="w-4/5 grid gap-1 grid-cols-3 h-12 md:h-16">
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
          </div>

          <div className="position-element  flex flex-row h-1/2 items-center mb-4 md:m-0">
            <div className="dark-txt w-1/5 flex justify-center flex-col items-center text-black text-[8px] md:text-lg 'bg-gray-300' font-large font-bold">
              <span>Select a position</span>
            </div>
            <div className="w-4/5 grid gap-1 grid-cols-4 grid-rows-1 h-12 md:h-16 ">
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
        </div>
        <PlayerDataContext.Provider value={{ playerContext }}>
          <Results data={dataForResults} />
          <BestByValue data={DataForValueForMoney} />
          <BBVPositional
            data={getFirstXInstancesOfEachType(DataForValueForMoney, 5)}
          />
          <Hotshots data={sortedHotshots} />
        </PlayerDataContext.Provider>
        <Footer />
      </div>
    </div>
  );
}
