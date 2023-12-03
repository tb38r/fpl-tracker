import Home from "./components/Home";

import {
  FetchGameWeekData,
  BootstrapStaticData,
  FetchPlayerData,
} from "@/lib/_api";
import { GetAllGameweeksData, GetAllPlayerData } from "./utils/_helpers";

export default async function AppMain() {
  let data = await GetAllGameweeksData(FetchGameWeekData);
  let staticData = await BootstrapStaticData();
  let playerData = await GetAllPlayerData(FetchPlayerData);

  return (
    <>
      <Home apiData={data} staticData={staticData} playerData={playerData} />
    </>
  );
}
