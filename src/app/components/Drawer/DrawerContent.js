import { useContext, useState } from "react";
import { PlayerDataContext } from "../../context/playerDataContext";
import DrawerHeader from "./DrawerHeader";
import DrawerTitle from "./DrawerTitle";
import DrawerFuture from "./DrawerFuture";
import DrawerHistory from "./DrawerHistory";
import {
  ParseHistoricalDrawerContent,
  ParseFutureDrawerContent,
} from "@/app/utils/_helpers";

const DrawerContent = (props) => {
  const context = useContext(PlayerDataContext);

  const [playerID, setPlayerID] = useState(props.playerID);
  const [playerObjData, setPlayerObjData] = useState(
    context.playerContext.playerData[playerID]
  );
  const [teamObj, setTeamObj] = useState(context.playerContext.teamData);

  let historicalDataForDrawer = ParseHistoricalDrawerContent(
    playerObjData,
    teamObj
  );

  let futureDataForDrawer = ParseFutureDrawerContent(playerObjData, teamObj);

  return (
    <div className="h-[33vh] flex flex-col bg-slate-950 ">
      <DrawerHeader name={`${props.firstName} ${props.secondName}`} />
      <div className="drawerContainer grid grid-cols-2 p-2 md:p-3 h-full gap-6 md:gap-12">
        <div className="drawerHistoryContainer flex flex-col items-center ">
          <DrawerTitle name="History" />
          <div className="drawerHistoryBody flex flex-col justify-around w-full h-full">
            {!!historicalDataForDrawer.length
              ? historicalDataForDrawer.map((ele, index) => (
                  <DrawerHistory
                    key={index}
                    isHome={ele.isHome}
                    opponent={ele.opponent}
                    awayScore={ele.awayScore}
                    homeScore={ele.homeScore}
                    totalPoints={ele.totalPoints}
                    didWinColor={ele.didWinColor}
                  />
                ))
              : null}
          </div>
        </div>

        <div className="drawerFuture flex flex-col items-center">
          <DrawerTitle name="Upcoming Fixtures" />
          <div className="drawerFutureBody flex flex-col justify-around w-full h-full">
            {!!futureDataForDrawer.length
              ? futureDataForDrawer.map((ele, index) => (
                  <DrawerFuture
                    key={index}
                    isHome={ele.isHome}
                    date={ele.date}
                    opponent={ele.opponent}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
