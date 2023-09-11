export async function FetchGameWeekData(gameweek) {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/event/${gameweek}/live/`,
    { next: { revalidate: 43200 } } );

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await response.json();

  return data;
}

export async function BootstrapStaticData() {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/bootstrap-static/`,
    { next: { revalidate: 43200 } }
  );

  if (!response.ok) {
    throw new Error("failed to fetch bootstrap-static data");
  }
  const data = await response.json();

  return data;
}
