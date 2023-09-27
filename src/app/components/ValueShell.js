import { kitImage } from "../utils/shared-variables";
import { ValueExtras } from "./ValueExtras";
import { teamCodeToString } from "../utils/shared-variables";
import NamedTile from "./NamedTile";

export default function ValueShell(props) {
  return (
    <div className="flex flex-col p-2 h-full w-full justify-center items-center gap-2 ">
      <div
        className="  h-16 w-16 md:h-32 md:w-32
         rounded-full"
        style={{
          backgroundImage: `url(/kits/${
            kitImage[teamCodeToString[props.teamName]]
          }kit.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <NamedTile
        name={props.name}
        id={props.playerid}
        firstName={props.firstName}
        secondName={props.secondName}
      />

      <div className="value-base h-10 md:h-24 w-full flex">
        <div className="text-[10px] text-base bg-pink-500 h-full md:w-24 flex justify-center items-center font-bold">
          {props.score}
        </div>
        <ValueExtras
          ownership={`${props.ownership}%`}
          ownedTitle={props.ownedTitle}
          cost={props.cost}
          costTitle={props.costTitle}
          pointsTitle={props.pointsTitle}
          points={props.points}
        />
      </div>
    </div>
  );
}
