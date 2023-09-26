
const DrawerHistory = (props) => {



  return (
    <div className="drawerHistoryInline flex flex-row justify-between w-full h-[1/3] items-center">
      <div className="text-slate-500 font-bold">
        {props.isHome ? "H" : "A"}
      </div>
      <div className={props.didWinColor}>{props.opponent}</div>
      <div className="drawerResult flex items-center justify-center text-xs font-bold">
        {" "}
        {props.homeScore}-{props.awayScore}
      </div>
      <div className="totalPoints text-xs font-bold">{props.totalPoints}pts</div>
    </div>
  );
};

export default DrawerHistory;
