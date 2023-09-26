import React from "react";

const DrawerHistory = (props) => {
  return (
    <div className="drawerHistoryInline flex flex-row justify-evenly w-full h-[1/3] items-center">
      <div className="{props.isHome ? text-slate-500 : 'A'}">
        {props.isHome ?'H': 'A'}
      </div>
      <div className="text-xs md:text-x text-black">
        {props.opponent}
      </div>
      <div className="drawerResult flex items-center justify-center text-xs bg-green-400 rounded-full">
        {" "}
        {props.homeScore}-{props.awayScore}
      </div>
      <div className="totalPoints text-xs">{props.totalPoints}pts</div>
    </div>
  );
};

export default DrawerHistory;
