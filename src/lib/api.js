export async function FetchGameWeekData(gameweek) {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/event/${gameweek}/live/`,{ next: { revalidate: 1 } }
    );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
}

export async function BootstrapStaticData() {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/bootstrap-static/`,{ next: { revalidate: 1 } }
   
  );

  if (!response.ok) {
    throw new Error("Failed to fetch bootstrap-static data");
  }
  const data = await response.json();

  return data;
}
//

export async function FetchPlayerData(playerID) {

  const respObj = {}
  const response = await fetch(
    `https://fantasy.premierleague.com/api/element-summary/${playerID}/`,{ next: { revalidate: 1 } }
    );

  if (!response.ok) {
    respObj.status = 'failed'

   return respObj
  }
  const data = await response.json();
  respObj.status = 'ok'
  respObj.data = data

  return respObj;
}


