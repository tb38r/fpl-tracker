export async function FetchGameWeekData(gameweek) {
  try {
    const response = await fetch(
      `https://fantasy.premierleague.com/api/event/${gameweek}/live/`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Error fetching gameweek data: ${err} for gameweek ${gameweek}`);
    throw err;
  }
}
//
export async function BootstrapStaticData() {
  try {
    const response = await fetch(
      `https://fantasy.premierleague.com/api/bootstrap-static/`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch bootstrap-static data");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Error fetching bootstrap-static data: ${err}`);
    throw err;
  }
}


export async function FetchPlayerData(playerID) {
  try {
    const response = await fetch(
      `https://fantasy.premierleague.com/api/element-summary/${playerID}/`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch player data for id ${playerID}`);
    
    }
    const data = await response.json();

    const respObj = {};
    respObj.status = 'ok';
    respObj.data = data;

    return respObj;
  } catch (err) {
    console.error(`Error fetching player data: ${err}`);
    throw err;
  }
}

