import Home from "./components/Home";
import {
  FetchGameWeekData,
  BootstrapStaticData,
  FetchPlayerData,
} from "@/lib/api";
import { GetAllGameweeksData, GetAllPlayerData } from "./utils/helpers";

export default async function AppMain() {




  let playerData = await GetAllPlayerData(FetchPlayerData);
  let staticData = await BootstrapStaticData();
  let data = await GetAllGameweeksData(FetchGameWeekData);

  return  (
    <>
      <Home apiData={data} staticData={staticData} playerData ={playerData}/>
    </>
  );
}
