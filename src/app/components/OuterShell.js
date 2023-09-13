import { kitImage } from "../utils/shared-variables";

export default function OuterShell(props) {


  return (
    <div className="flex flex-col p-2 h-full justify-center items-center gap-2 ">
      <div
        className="  h-32 w-32
         rounded-full"
        style={{
          backgroundImage: `url(/kits/${kitImage[props.teamname]}kit.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="h-1/10 w-full flex justify-center uppercase font-bold bg-yellow-400 text-white-500">
        {props.name}
      </div>

      <div className=" bg-pink-500 w-20 h-20 rounded-full flex justify-center items-center font-bold">
        {props.score}
      </div>
    </div>
  );
}
