export default function OuterShell(props) {
    console.log(`URL: /${props.teamname}`);

  return (
    <div className="flex flex-col p-2 h-full justify-center items-center gap-2 ">
      <div
        className="h-3/5 w-full"
        style={{ backgroundImage: `url(/${props.teamname})`, backgroundSize: "cover",
        backgroundRepeat: "no-repeat"}}
      />

      <div className="h-1/10 w-full flex justify-center font-bold bg-blue-50 text-blue-500">
        {props.surname}
      </div>

      <div className="w-20 h-20 bg-pink-500 rounded-full border-2 border-black flex justify-center items-center">
        {props.score}
      </div>
    </div>
  );
}
