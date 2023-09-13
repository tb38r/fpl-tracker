
import OuterShell from "./OuterShell";
import Honourables from "./Honourables";

//shhould receive an obj with 8 arrays with the comp
export default function ResultsComponent(props) {

  return (
    <div className="h-2/5 grid gap-2 grid-cols-4 pt-20 ">
      {props.data ? props.data.slice(0,3).map(ele => <OuterShell key={ele.id} name={ele.name} teamname= {ele.team} score={ele.points} />) : null}

      <div className="flex flex-col justify-evenly">
{props.data ? props.data.slice(3,8).map(ele => <Honourables key={ele.id} name={ele.name} score={ele.points}  teamname= {ele.team} />) : null}

      </div>
    </div>
  );
}
