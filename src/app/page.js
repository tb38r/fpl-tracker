
import Home from "./components/Home";
import { FetchGameWeekData, BootstrapStaticData } from "@/lib/api";
import {GetAllGameweeksData} from "./utils/helpers";

export default async function AppMain(){
 let data = await GetAllGameweeksData(FetchGameWeekData)
let staticData = await BootstrapStaticData()


return(
  <>
  <Home  apiData= {data} staticData = {staticData}/>
  </>
)
}

