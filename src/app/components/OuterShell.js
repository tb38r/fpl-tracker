import { kitImage } from "../utils/shared-variables";
import NamedTile from "./NamedTile";

export default function OuterShell(props) {


  return (
    <div className="flex flex-col p-2 h-full justify-center items-center gap-2 ">
      <div
        className="  h-16 w-16 md:h-32 md:w-32
         rounded-full"
        style={{
          backgroundImage: `url(/kits/${kitImage[props.teamname]}kit.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
       <NamedTile name= {props.name} id ={props.playerid}/>
       
       
      {/* <div className="h-1/10 w-full flex justify-center uppercase font-bold bg-yellow-400  text-[10px] md:text-lg">
        {props.name}
      </div> */}

      <div className=" bg-pink-500 w-10 h-10 md:h-20 md:w-20 rounded-full flex justify-center items-center font-bold">
        {props.score}
      </div>
    </div>
  );
}
