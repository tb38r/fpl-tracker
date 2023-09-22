import OuterShell from "./OuterShell";
import Honourables from "./Honourables";
import ValueShell from "./ValueShell";

export default function BestByValue(props) {
  console.log("BVV", props);

  return (
    <>
      {!!props.data.length ? (
        <div className="dark-backgrd text-xs mt-2 results-title text-white font-bold flex justify-center bg-black md:text-base md:font-extrabold md:mt-10">
          Pound For Pound List (best performers by value)
        </div>
      ) : null}

      <div className="h-1/3 w-full grid gap-2 grid-cols-4 pt-10 ">
        {!!props.data.length
          ? props.data.slice(0, 3).map((ele) => (
              <ValueShell
                key={ele.id}
                name={ele.web_name}
                score={ele.value_season}
                pointsTitle="Points"
                costTitle="Cost"
                ownedTitle="ownedBy"
                points={ele.total_points}
                cost={ele.now_cost / 10}
                ownership={ele.selected_by_percent}
                teamName = {ele.team_code}
              />
            ))
          : null}

        <div className="flex flex-col justify-evenly">
          {props.data
            ? props.data.slice(3, 8).map((ele) => (
                <Honourables
                  key={ele.id}
                  name={ele.web_name}
                  score={ele.value_season}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
}
