export default function OuterShell(props) {
  const kitImage = {
    Spurs: "tottenham",
    Liverpool: "liverpool",
    Wolves: "wolves",
    Brentford: "brentford",
    "Nott'm Forest": "nottinghamforest",
    "Aston Villa": "astonvilla",
    Chelsea: "chelsea",
    Brighton: "brighton",
    Arsenal: "arsenal",
    "West Ham": "westham",
    "Sheffield Utd": "sheffieldunited",
    "Man City": "mancity",
    Luton: "lutontown",
    Burnley: "burnley",
    "Crystal Palace": "crystalpalace",
    Bournemouth: "bournemouth",
    Everton: "everton",
    Fulham: "fulham",
    "Man Utd": "manchesterunited",
    Newcastle: "newcastleunited",
  };

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

      <div className="h-1/10 w-full flex justify-center uppercase font-bold bg-yellow-500 text-white-500">
        {props.name}
      </div>

      <div className=" bg-pink-500 w-20 h-20 rounded-full flex justify-center items-center">
        {props.score}
      </div>
    </div>
  );
}
