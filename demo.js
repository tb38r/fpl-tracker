async function FetchGameWeekData(gameweek) {
    try {
      const response = await fetch(`https://fantasy.premierleague.com/api/event/${gameweek}/live/`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data for gameweek ${gameweek}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data for gameweek ${gameweek}:`, error);
      throw error;
    }
  }
  
  async function GetAllGameweeksData(fn) {
    let result = [];
  
    for (let i = 1; i < 39; i++) {
      try {
        let data = await fn(i);
        if (data.elements.length === 0) {
          console.log(`No data available for gameweek ${i}`);
          break;
        }
        result.push(data);
      } catch (error) {
        console.error(`Error processing gameweek ${i}:`, error);
        break; // Stop processing further gameweeks on error
      }
    }
  
    return result;
  }
  
  (async () => {
    try {
      let data = await GetAllGameweeksData(FetchGameWeekData);
      console.log('Data:', data.length);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  })();