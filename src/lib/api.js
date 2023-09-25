export async function FetchGameWeekData(gameweek) {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/event/${gameweek}/live/`,
    );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return data;
}

export async function BootstrapStaticData() {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/bootstrap-static/`,
   
  );

  if (!response.ok) {
    throw new Error("Failed to fetch bootstrap-static data");
  }
  const data = await response.json();

  return data;
}
