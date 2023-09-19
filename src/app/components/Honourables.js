
import { kitImage } from "../utils/shared-variables";

export default function Honourables(props) {

  return (
    <div className="flex flex-col justify-between items-center h-8 rounded-full bg-blue-300 px-4 md:h-[40px] md:flex-row">
      <div className=" hidden h-2 w-2
         rounded-full md:h-8 md:w-8 md:block" 
        style={{
          backgroundImage: `url(/kits/${kitImage[props.teamname]}kit.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}></div><div className=" text-[8px] text-white font-bold md:text-base">{props.name}</div> <div className=" text-[9px] font-bold md:text-base">{props.score}</div>
    </div>
  );
}
