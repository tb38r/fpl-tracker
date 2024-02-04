import { GetAllGameweeksData, GetAllPlayerData } from "@/app/utils/_helpers";
import { FetchGameWeekData, FetchPlayerData } from "@/lib/_api";
import { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState();
  const [staticData, setStaticData] = useState();
  const [playerData, setPlayerData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const a = await GetAllGameweeksData(FetchGameWeekData);
        const b = await BootstrapStaticData();
        const c = await GetAllPlayerData(FetchPlayerData);
        setData(a);
        setStaticData(b);
        setPlayerData(c);
        setLoading(false);
      } catch (err) {
        setError(error);
      }
    };
    getData();
  }, []);

  return { data, staticData, playerData, loading, error };
};

export default useGetData;
