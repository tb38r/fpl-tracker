
import { kitImage } from "../utils/shared-variables";

export default function Honourables(props) {

  return (
    <div className="flex flex-row justify-between items-center h-1/6 rounded-full bg-blue-300 px-4">
      <div className="  h-8 w-8
         rounded-full"
        style={{
          backgroundImage: `url(/kits/${kitImage[props.teamname]}kit.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}></div><div className="text-white font-bold">{props.name}</div> <div className="text-white-500 font-bold">{props.score}</div>
    </div>
  );
}
