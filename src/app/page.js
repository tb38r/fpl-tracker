
import Home from "./components/Home";
import { FetchGameWeekData, BootstrapStaticData } from "@/lib/api";
import {GetAllGameweeksData} from "./utils/helpers";

export default async function AppMain(gameweek){
 let data = await GetAllGameweeksData(FetchGameWeekData)
 let staticData = await BootstrapStaticData()
 let gwFive = await FetchGameWeekData(5)


return(
  <>
  <Home  apiData= {data} staticData = {staticData} gw={gwFive}/>
  </>
)
}

