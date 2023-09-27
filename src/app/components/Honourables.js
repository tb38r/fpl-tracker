import { kitImage } from "../utils/shared-variables";
import { teamCodeToString } from "../utils/shared-variables";
import { Drawer } from "@mui/material";
import DrawerContent from "./Drawer/DrawerContent";
import { useState } from "react";

export default function Honourables(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [playerID, setPlayerID] = useState(props.id);

  return (
    <>
      {" "}
      <div
        className="flex flex-col justify-between items-center h-8 rounded-full bg-blue-300 hover:bg-blue-600 px-4 md:h-[40px] md:flex-row cursor-pointer"
        onClick={() => setIsDrawerOpen(true)}
      >
        <div
          className=" hidden h-2 w-2
         rounded-full md:h-8 md:w-8 md:block"
          style={{
            backgroundImage: props.hasValue
              ? `url(/kits/${
                  kitImage[teamCodeToString[props.teamName]]
                }kit.png)`
              : `url(/kits/${kitImage[props.teamname]}kit.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className=" text-[8px] text-white font-bold md:text-base">
          {props.name}
        </div>{" "}
        <div className=" text-[9px] font-bold md:text-base">{props.score}</div>
      </div>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerContent
          playerID={props.playerid}
          firstName={props.firstName}
          secondName={props.secondName}
        />
      </Drawer>
    </>
  );
}
