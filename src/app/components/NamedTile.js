import { useState } from "react";
import { Drawer } from "@mui/material";
import DrawerContent from "./Drawer/DrawerContent";

const NamedTile = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [playerID, setPlayerID] = useState(props.id);

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
        <DrawerContent
          playerID={playerID}
          firstName={props.firstName}
          secondName={props.secondName}
        />
      </Drawer>
    </>
  );
};

export default NamedTile;
