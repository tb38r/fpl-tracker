import { useState } from "react";
import { Drawer } from "@mui/material";
import TiledBox from "./TiledBox";

const NamedTile = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const[playerID, setPlayerID] = useState(props.id)


  return (
    <>
      <div
        className="h-1/10 w-full flex justify-center uppercase font-bold bg-yellow-400  text-[10px] md:text-lg cursor-pointer"
        onClick={() => setIsDrawerOpen(true)}
      >
        {props.name}
      </div>

      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        
      >
        <TiledBox playerID ={playerID}/>
 
 

     
      </Drawer>
    </>
  );
};

export default NamedTile;