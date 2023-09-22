

export function ValueExtras(props){

return(
    <div className=" flex flex-col w-full bg-black justify-around px-1">
      <div className="flex flex-row justify-between">
      <span className="md:font-bold text-[8px] md:text-base flex items-center text-white"> {props.pointsTitle}</span>  <span className="text-[8px] flex items-center md:text-base md:font-bold text-white">{props.points}</span>

    </div>
    <div className="flex flex-row justify-between">
    <span className="text-[8px] flex items-center md:text-base md:font-bold text-white">{props.costTitle}</span> <span className="text-[8px] flex items-center md:text-base md:font-bold text-white"> {props.cost}</span>

    </div>
    <div className="flex flex-row justify-between ">
        <span className="text-[8px] flex items-center md:text-base md:font-bold text-white">{props.ownedTitle}</span>  <span className="text-[8px] flex items-center md:text-base md:font-bold text-white">{props.ownership}</span>

    </div>
    </div>
)

}



