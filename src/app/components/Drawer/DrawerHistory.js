
const DrawerHistory = (props) => {



  return (
    <div className="drawerHistoryInline flex flex-row justify-between w-full h-[1/3] items-center">
      <div className="text-slate-500 md:font-bold text-xs md:text-base lg:text-lg">
        {props.isHome ? "H" : "A"}
      </div>
      <div className={`${props.didWinColor} text-xs md:text-base lg:text-lg`}>{props.opponent}</div>
      <div className=" text-white drawer-theme drawerResult flex items-center justify-center md:font-bold text-xs md:text-base lg:text-lg">
        {" "}
        {props.homeScore}-{props.awayScore}
      </div>
      <div className="text-white totalPoints md:font-bold text-xs md:text-base lg:text-lg">{props.totalPoints}pts</div>
    </div>
  );
};

export default DrawerHistory;
