
const DrawerFuture= (props) => {



    return (
      <div className="drawerFutureInline flex flex-row justify-between w-full h-[1/3] items-center">
        <div className="text-slate-500 md:font-bold text-xs md:text-base lg:text-lg">
          {props.isHome ? "H" : "A"}
        </div>
        <div className="opponent md:font-bold text-xs md:text-base lg:text-lg text-blue-500">{props.opponent}</div>
        <div className="text-white md:font-bold text-xs md:text-base lg:text-lg">{props.date}</div>
      
      </div>
    );
  };
  
  export default DrawerFuture;
  