import OuterShell from "../OuterShell";
import Honourables from "../Honourables";

const Hotshots = (props) => {

    console.log('props from hotshot', props);
  return (
    <>
      {!!props.data.defenders.length ? (
        <div className=" dark-backgrd text-xs mt-6 results-title text-white font-bold flex justify-center bg-black md:text-base md:font-extrabold md:mt-16">
          Hotshots Of The Week
        </div>
      ) : null}

      <div className="h-1/3 w-full grid gap-2 grid-cols-4 pt-10 ">
        <div className="midfieldersBBV flex flex-col ">
          <span className="text-white flex justify-center md:font-bold dark-backgrd uppercase font-bold text-[10px] md:text-lg bg-black">
            GOALKEEPERS
          </span>
          {!!props.data.goalkeepers.length ? (
            <OuterShell
              key={props.data.goalkeepers[0].id}
              name={props.data.goalkeepers[0].name}
              teamname={props.data.goalkeepers[0].team}
              score={props.data.goalkeepers[0].points}
              playerid={props.data.goalkeepers[0].id}
              firstName={props.data.goalkeepers[0].firstName}
              secondName={props.data.goalkeepers[0].secondName}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2">
            {!!props.data.goalkeepers.length
              ? props.data.goalkeepers
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                      key={ele.id}
                      name={ele.name}
                      score={ele.points}
                      hasValue={false}
                      teamname={ele.team}
                      firstName={ele.firstName}
                      secondName={ele.secondName}
                      playerid={ele.id}
                    />
                  ))
              : null}
          </div>
        </div>

        <div className="defendersBBV flex flex-col ">
          <span
            className="text-white flex justify-center md:font-bold dark-backgrd  bg-black 
               uppercase font-bold text-[10px] md:text-lg
              "
          >
            DEFENDERS
          </span>
          {!!props.data.defenders.length ? (
            <OuterShell
              key={props.data.defenders[0].id}
              name={props.data.defenders[0].name}
              teamname={props.data.defenders[0].team}
              score={props.data.defenders[0].points}
              playerid={props.data.defenders[0].id}
              firstName={props.data.defenders[0].firstName}
              secondName={props.data.defenders[0].secondName}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2">
            {!!props.data.defenders.length
              ? props.data.defenders
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                    key={ele.id}
                    name={ele.name}
                    score={ele.points}
                    hasValue={false}
                    teamname={ele.team}
                    firstName={ele.firstName}
                    secondName={ele.secondName}
                    playerid={ele.id}
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
            <OuterShell
              key={props.data.midfielders[0].id}
              name={props.data.midfielders[0].name}
              teamname={props.data.midfielders[0].team}
              score={props.data.midfielders[0].points}
              playerid={props.data.midfielders[0].id}
              firstName={props.data.midfielders[0].firstName}
              secondName={props.data.midfielders[0].secondName}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2 ">
            {!!props.data.midfielders.length
              ? props.data.midfielders
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                    key={ele.id}
                    name={ele.name}
                    score={ele.points}
                    hasValue={false}
                    teamname={ele.team}
                    firstName={ele.firstName}
                    secondName={ele.secondName}
                    playerid={ele.id}
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
            <OuterShell
              key={props.data.forwards[0].id}
              name={props.data.forwards[0].name}
              teamname={props.data.forwards[0].team}
              score={props.data.forwards[0].points}
              playerid={props.data.forwards[0].id}
              firstName={props.data.forwards[0].firstName}
              secondName={props.data.forwards[0].secondName}
            />
          ) : null}

          <div className="bbvpositionHonourables flex flex-col md:gap-4 gap-2">
            {!!props.data.forwards.length
              ? props.data.forwards
                  .slice(1, 5)
                  .map((ele) => (
                    <Honourables
                    key={ele.id}
                    name={ele.name}
                    score={ele.points}
                    hasValue={false}
                    teamname={ele.team}
                    firstName={ele.firstName}
                    secondName={ele.secondName}
                    playerid={ele.id}
                  />
                  ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotshots;
