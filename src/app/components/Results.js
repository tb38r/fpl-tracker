import OuterShell from "./OuterShell";
import Honourables from "./Honourables";

//shhould receive an obj with 8 arrays with the comp
export default function Results(props) {


  return (
    <>
     

    <div className="h-1/3 grid gap-2 grid-cols-4 pt-10 ">
      {!!props.data.length ? (
        props.data
          .slice(0, 3)
          .map((ele) => (
            <OuterShell
              key={ele.id}
              name={ele.name}
              teamname={ele.team}
              score={ele.points}
              playerid= {ele.id}
            />
          ))
      ) : null}

      <div className="flex flex-col justify-evenly gap-1 md:gap-0">
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
    </>
  );
}

