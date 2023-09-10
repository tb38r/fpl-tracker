

export async function fetchGameWeekData(gameweek) {

  const response = await fetch(`https://fantasy.premierleague.com/api/event/${gameweek}/live/`);

  if(!response.ok){
    throw new Error('failed to fetch data')
  
  }
  const data = await response.json();
  
    return data
}