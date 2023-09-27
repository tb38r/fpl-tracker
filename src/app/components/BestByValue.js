import Honourables from "./Honourables";
import ValueShell from "./ValueShell";

export default function BestByValue(props) {

  return (
    <>
      {!!props.data.length ? (
        <div className="dark-backgrd text-xs mt-6 results-title text-white font-bold flex justify-center bg-black md:text-base md:font-extrabold md:mt-16">
          Pound For Pound List (overall best performers by value)
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
                playerid= {ele.id}
                firstName = {ele.first_name}
                secondName = {ele.second_name}
              />
            ))
          : null}

         <div className="flex flex-col justify-evenly gap-1 md:gap-0">
          {props.data
            ? props.data.slice(3, 8).map((ele) => (
                <Honourables
                  key={ele.id}
                  name={ele.web_name}
                  score={ele.value_season}
                  hasValue = {true}
                  teamName = {ele.team_code}
                  firstName = {ele.first_name}
                  secondName = {ele.second_name}
                  playerid= {ele.id}

                />
              ))
            : null}
        </div>
      </div>
    </>
  );
}
