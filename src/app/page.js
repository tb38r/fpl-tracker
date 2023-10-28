import Home from "./components/Home";
import { headers } from "next/headers";

import {
  FetchGameWeekData,
  BootstrapStaticData,
  FetchPlayerData,
} from "@/lib/api";
import { GetAllGameweeksData, GetAllPlayerData } from "./utils/helpers";




export default async function AppMain() {
  let headersList = headers();




  

  let data = await GetAllGameweeksData(FetchGameWeekData);
  let staticData = await BootstrapStaticData();
  let playerData = await GetAllPlayerData(FetchPlayerData);



  return (
    <>
      <Home apiData={data} staticData={staticData} playerData ={playerData}/>
    </>
  );
}


