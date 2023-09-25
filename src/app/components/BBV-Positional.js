import Honourables from "./Honourables";
import ValueShell from "./ValueShell";

export default function BBVPositional(props) {

  return (
    <>
      {!!props.data.defenders.length ? (
        <div className="dark-backgrd text-xs mt-2 results-title text-white font-bold flex justify-center bg-black md:text-base md:font-extrabold md:mt-10">
          Pound For Pound List (per position)
        </div>
      ) : null}

      <div className="h-1/3 w-full grid gap-2 grid-cols-4 pt-10 ">
        <div className="midfieldersBBV flex flex-col ">
          <span className="text-white flex justify-center md:font-bold dark-backgrd uppercase font-bold text-[10px] md:text-lg bg-black">
            GOALKEEPERS
          </span>
          {!!props.data.goalkeepers.length ? (
            <ValueShell
              key={props.data.goalkeepers[0].id}
              name={props.data.goalkeepers[0].web_name}
              score={props.data.goalkeepers[0].value_season}
              pointsTitle="Points"
              costTitle="Cost"
              ownedTitle="ownedBy"
              points={props.data.goalkeepers[0].total_points}
              cost={props.data.goalkeepers[0].now_cost / 10}
              ownership={props.data.goalkeepers[0].selected_by_percent}
              teamName={props.data.goalkeepers[0].team_code}
              id={props.data.goalkeepers[0].id}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2">
            {!!props.data.goalkeepers.length
              ? props.data.goalkeepers
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                      key={ele.id}
                      name={ele.web_name}
                      score={ele.value_season}
                      hasValue={true}
                      teamName={ele.team_code}
                    />
                  ))
              : null}
          </div>
         
        </div>

        <div className="defendersBBV flex flex-col ">
          <span className="text-white flex justify-center md:font-bold dark-backgrd  bg-black 
           uppercase font-bold text-[10px] md:text-lg
          ">
            DEFENDERS
          </span>
          {!!props.data.defenders.length ? (
            <ValueShell
              key={props.data.defenders[0].id}
              name={props.data.defenders[0].web_name}
              score={props.data.defenders[0].value_season}
              pointsTitle="Points"
              costTitle="Cost"
              ownedTitle="ownedBy"
              points={props.data.defenders[0].total_points}
              cost={props.data.defenders[0].now_cost / 10}
              ownership={props.data.defenders[0].selected_by_percent}
              teamName={props.data.defenders[0].team_code}
              id={props.data.defenders[0].id}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2">
            {!!props.data.defenders.length
              ? props.data.defenders
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                      key={ele.id}
                      name={ele.web_name}
                      score={ele.value_season}
                      hasValue={true}
                      teamName={ele.team_code}
                    />
                  ))
              : null}
          </div>

        </div>

        <div className="midfieldersBBV flex flex-col ">
          <span className="text-white flex justify-center md:font-bold dark-backgrd uppercase font-bold text-[10px] md:text-lg bg-black">
            MIDFIELDERS
          </span>
          {!!props.data.midfielders.length ? (
            <ValueShell
              key={props.data.midfielders[0].id}
              name={props.data.midfielders[0].web_name}
              score={props.data.midfielders[0].value_season}
              pointsTitle="Points"
              costTitle="Cost"
              ownedTitle="ownedBy"
              points={props.data.midfielders[0].total_points}
              cost={props.data.midfielders[0].now_cost / 10}
              ownership={props.data.midfielders[0].selected_by_percent}
              teamName={props.data.midfielders[0].team_code}
              id={props.data.midfielders[0].id}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2 ">
            {!!props.data.midfielders.length
              ? props.data.midfielders
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                      key={ele.id}
                      name={ele.web_name}
                      score={ele.value_season}
                      hasValue={true}
                      teamName={ele.team_code}
                    />
                  ))
              : null}
          </div>

        </div>

        <div className="forwardsBBV flex flex-col ">
          <span className="text-white flex justify-center md:font-bold dark-backgrd  uppercase font-bold text-[10px] md:text-lg bg-black">
            FORWARDS
          </span>
          {!!props.data.forwards.length ? (
            <ValueShell
              key={props.data.forwards[0].id}
              name={props.data.forwards[0].web_name}
              score={props.data.forwards[0].value_season}
              pointsTitle="Points"
              costTitle="Cost"
              ownedTitle="ownedBy"
              points={props.data.forwards[0].total_points}
              cost={props.data.forwards[0].now_cost / 10}
              ownership={props.data.forwards[0].selected_by_percent}
              teamName={props.data.forwards[0].team_code}
              id={props.data.forwards[0].id}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2">
            {!!props.data.forwards.length
              ? props.data.forwards
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                      key={ele.id}
                      name={ele.web_name}
                      score={ele.value_season}
                      hasValue={true}
                      teamName={ele.team_code}
                    />
                  ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
