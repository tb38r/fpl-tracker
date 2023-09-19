import OuterShell from "./OuterShell";
import Honourables from "./Honourables";

//shhould receive an obj with 8 arrays with the comp
export default function Results(props) {

  return (
    <div className="h-2/5 grid gap-2 grid-cols-4 pt-10 ">
      {!!props.data.length ? (
        props.data
          .slice(0, 3)
          .map((ele) => (
            <OuterShell
              key={ele.id}
              name={ele.name}
              teamname={ele.team}
              score={ele.points}
            />
          ))
      ) : (
        <>
          <div className="text-sky-400 h-1/5 text-sm font-bold text-center items-center flex md:text-3xl ">
            select a time period{" "}
          </div>
          <div className="text-emerald-400 h-1/5 text-sm font-bold text-center items-center flex md:text-3xl">
            and a position
          </div>
          <div className="text-sky-400 h-1/5 text-sm font-bold text-center items-center flex object-contain pt-14 md:text-2xl">
            fpl tracker will show you the highest average points earners over that period
          </div>
          <div className="text-emerald-400 h-1/5 text-sm font-bold text-center items-center flex md:text-3xl">
good luck with your transfers!          </div>
        </>
      )}

      <div className="flex flex-col justify-evenly">
        {props.data
          ? props.data
              .slice(3, 8)
              .map((ele) => (
                <Honourables
                  key={ele.id}
                  name={ele.name}
                  score={ele.points}
                  teamname={ele.team}
                />
              ))
          : null}
      </div>
    </div>
  );
}
