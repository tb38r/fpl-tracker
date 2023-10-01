

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

 async function BootstrapStaticData() {
  const response = await fetch(
    `https://fantasy.premierleague.com/api/bootstrap-static/`,
   
  );

  if (!response.ok) {
    throw new Error("Failed to fetch bootstrap-static data");
  }
  const data = await response.json();

  return data;
}
//

 async function FetchPlayerData(playerID) {

  const respObj = {}
  const response = await fetch(
    `https://fantasy.premierleague.com/api/element-summary/${playerID}/`
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




 async function GetAllPlayerData(fn) {
  

    let result = {};
    for (let i = 1; i < 720; i++) {
      let data = await fn(i);
      if (data.status === "ok") {
        result[i] = data.data;
      }
      // if (data.elements.length === 0) break;
    }
  
    return result;
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
  






// let playerData = await GetAllPlayerData(FetchPlayerData);
// let staticData = await BootstrapStaticData();
// let data = await GetAllGameweeksData(FetchGameWeekData)

(async () => {
    try {
console.log('hi');
        let playerData = await GetAllPlayerData(FetchPlayerData);
        let staticData = await BootstrapStaticData();
        let data = await GetAllGameweeksData(FetchGameWeekData);  
        
        console.log('Data:',  data.length);
        console.log('pData:', playerData.length);
        console.log('sData:', staticData.length);

    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  })();