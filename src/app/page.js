import Home from "./components/Home";
import { revalidatePath } from "next/cache";
import {
  FetchGameWeekData,
  BootstrapStaticData,
  FetchPlayerData,
} from "@/lib/api";
import { GetAllGameweeksData, GetAllPlayerData } from "./utils/helpers";

export default async function AppMain() {

  let data = await GetAllGameweeksData(FetchGameWeekData);
  let staticData = await BootstrapStaticData();
  let playerData = await GetAllPlayerData(FetchPlayerData);

  revalidatePath('/');
//

  return (
    <>
      <Home apiData={data} staticData={staticData} playerData ={playerData}/>
    </>
  );
}
