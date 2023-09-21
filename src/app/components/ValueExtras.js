

export function ValueExtras(props){

return(
    <div className=" flex flex-col w-full bg-black justify-around px-1">
      <div className="flex flex-row justify-between">
      <span className="md:font-bold text-[8px] md:text-base flex items-center"> {props.pointsTitle}</span>  <span className="text-[8px] flex items-center md:text-base md:font-bold">{props.points}</span>

    </div>
    <div className="flex flex-row justify-between">
    <span className="text-[8px] flex items-center md:text-base md:font-bold ">{props.costTitle}</span> <span className="text-[8px] flex items-center md:text-base md:font-bold "> {props.cost}</span>

    </div>
    <div className="flex flex-row justify-between ">
        <span className="text-[8px] flex items-center md:text-base md:font-bold">{props.ownedTitle}</span>  <span className="text-[8px] flex items-center md:text-base md:font-bold ">{props.ownership}</span>

    </div>
    </div>
)

}



