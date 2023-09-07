export default function OuterShell(props) {
  console.log(`URL: /${props.teamname}`);

  return (
    <div className="flex flex-col p-2 h-full justify-center items-center gap-2 ">
      <div
        className="  h-48 w-48 rounded-full"
        style={{
          backgroundImage: `url(/kits/${props.teamname}kit.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="h-1/10 w-full flex justify-center uppercase font-bold bg-yellow-500 text-white-500">
        {props.surname}
      </div>

      <div className=" bg-pink-500 w-20 h-20 rounded-full flex justify-center items-center">
        {props.score}
      </div>
    </div>
  );
}
