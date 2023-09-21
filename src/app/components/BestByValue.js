import OuterShell from "./OuterShell";
import Honourables from "./Honourables";


export default function BestByValue(props) {

  return (
    <>
        {!!props.data.length ? 
    <div className="text-xs mt-2 results-title text-cyan-100 font-bold flex justify-center bg-black md:text-base md:font-extrabold">Pound for pound list (Best performers by value)</div>:null}

    <div className="h-1/3 grid gap-2 grid-cols-4 pt-10 ">
      {!!props.data.length ? (
        props.data
          .slice(0, 3)
          .map((ele) => (
            <OuterShell
              key={ele.id}
              name={ele.web_name}
              //teamname={ele.team_code}
              score={ele.value_season}
            />
          ))
      ) : null}

      <div className="flex flex-col justify-evenly">
        {props.data
          ? props.data
              .slice(3, 8)
              .map((ele) => (
                <Honourables
                key={ele.id}
                name={ele.web_name}
               // teamname={ele.team_code}
                score={ele.value_season}
                />
              ))
          : null}
      </div>
    </div>
    </>
  );
}