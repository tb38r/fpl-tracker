
import Home from "./components/Home";
import { fetchData } from "@/lib/api";
import GetGameweekData from "./utils/helpers";

export default async function AppMain(gameweek){
 let data = await GetGameweekData(fetchData)

 //To get players names using Id
 //element_type(1 == GK, 2= DF, 3=MF, 4=Forwards )
 //puulse_id = 'team code' ??

 //https://fantasy.premierleague.com/api/bootstrap-static/
return(
  <>
  <Home  apiData= {data}/>
  </>
)
}

/*
//https://fantasy.premierleague.com/api/event/4/live/
within here --> 
"id" represents the player's id
"total_points" represents the players total points for that GW


//https://fantasy.premierleague.com/api/bootstrap-static/
within here element type represents the position
 element_type(1 == GK, 2= DF, 3=MF, 4=Forwards)
"first_name" && "second_name" (use "web_name")
also "id" to match,

within block 
"name"(upper block) for TeamName and "id"(within upper block) && "team"(within player block) match


*/