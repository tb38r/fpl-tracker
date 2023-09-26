import { useContext, useState } from "react";
import { PlayerDataContext } from "../../context/playerDataContext";
import DrawerHeader from "./DrawerHeader";
import DrawerTitle from "./DrawerTitle";
import DrawerHistory from "./DrawerHistory";
import { GetLastXElements, ParseDrawerContent } from "@/app/utils/helpers";

const DrawerContent = (props) => {
  const context = useContext(PlayerDataContext);

  const [playerID, setPlayerID] = useState(props.playerID);
  const [playerObjData, setPlayerObjData] = useState(
    context.playerContext.playerData[playerID]
  );
  const [teamObj, setTeamObj] = useState(context.playerContext.teamData);

  console.log("props from DrawerContent", props);


  //array of three objects
  //isHome, opponent (opp-1), awayScore = , homescore = , didWin = (num), totalPoints

  let dataForDrawer = ParseDrawerContent(playerObjData, teamObj);

  return (
    <div className="h-[33vh] text-black flex flex-col">
      <DrawerHeader name="Daniel Amokachi" />
      <div className="drawerContainer grid grid-cols-2 p-2 md:p-3 h-full">
        <div className="drawerHistoryContainer flex flex-col items-center ">
          <DrawerTitle name="History" />
          <div className="drawerHistoryBody flex flex-col justify-around w-full h-full">
            {!!dataForDrawer.length
              ? dataForDrawer.map(( ele, index) => (
                  <DrawerHistory
                    key={index}
                    isHome={ele.isHome}
                    opponent={ele.opponent}
                    awayScore={ele.awayScore}
                    homeScore ={ele.homeScore}
                    totalPoints ={ele.totalPoints}
                    didWinColor ={ele.didWinColor}
                  />
                ))
              : null}
     
          </div>
        </div>

        <div className="drawerFuture flex flex-col items-center">
          <DrawerTitle name="Upcoming Fixtures" />
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
