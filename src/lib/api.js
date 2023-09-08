

export async function fetchData() {

    const response = await fetch ('https://fantasy.premierleague.com/api/event/1/live/');
   
    if(!response.ok){
      throw new Error('failed to fetch data')
    }

    return await response.json()
}