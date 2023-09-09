
import Home from "./components/Home";
import { fetchData } from "@/lib/api";

export default async function AppMain(gameweek){
 let data = await fetchData(1)

return(
  <>
  <Home  apiData= {data}/>
  </>
)
}



