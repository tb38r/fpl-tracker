import { useContext } from "react";
import { PlayerDataContext } from "../../context/playerDataContext";
import DrawerHeader from "./DrawerHeader";
import DrawerTitle from "./DrawerTitle";
import DrawerHistory from "./DrawerHistory";

const DrawerContent = (props) => {
  console.log('props from Drawer Content', props);

  const context = useContext(PlayerDataContext);
  console.log('cid', context.playerContext);

  return (
    <div className="h-[33vh] text-black flex flex-col">
      <DrawerHeader name="Daniel Amokachi" />
      <div  className="drawerContainer grid grid-cols-2 p-2 md:p-3 h-full">
        <div className='drawerHistoryContainer flex flex-col items-center '>
        <DrawerTitle name='History' />
        <div className="drawerHistoryBody flex flex-col justify-around w-full h-full">
        <DrawerHistory isHome = {true} opponent = {'Sheffield United'} awayScore={8} homeScore={0} totalPoints={18}/>
        <DrawerHistory isHome = {false} opponent = {'Sheffield United'} awayScore={8} homeScore={0} totalPoints={18}/>
        <DrawerHistory isHome = {true} opponent = {'Sheffield United'} awayScore={8} homeScore={0} totalPoints={18}/>

        </div>
        </div>
        
        <div className='drawerFuture flex flex-col items-center'>
        <DrawerTitle name='Upcoming Fixtures' />


        </div>

      </div>
    </div>
  );
};

export default DrawerContent;
