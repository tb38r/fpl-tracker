

export function ValueExtras(props){

return(
    <div className="flex flex-col w-full bg-black justify-around px-1">
      <div className="flex flex-row justify-between">
      <span className="font-bold"> {props.pointsTitle}</span>  <span className="  font-bold">{props.points}</span>

    </div>
    <div className="flex flex-row justify-between">
    <span className="  font-bold">{props.costTitle}</span> <span className="font-bold "> {props.cost}</span>

    </div>
    <div className="flex flex-row justify-between ">
        <span className="  font-bold">{props.ownedTitle}</span>  <span className="font-bold ">{props.ownership}</span>

    </div>
    </div>
)

}



