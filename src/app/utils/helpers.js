import { Plaster } from "next/font/google";

export async function GetAllGameweeksData(fn) {
  let result = [];

  for (let i = 1; i < 39; i++) {
    let data = await fn(i);
    if (data.elements.length === 0) break;
    result.push(data);
  }

  return result;
}

//returns an array per gw sorted by total points
//to test, are values returned in ascending order as expected
export function SortedByPoints(arr) {
  return arr.map((GW) => {
    return GW.elements.sort(
      (a, b) => b.stats.total_points - a.stats.total_points
    );
  });
}

//should return an arr of arr[8]s
export function GetLastXElements(arr, num) {
  if (num >= 0 && arr.length >= num) {
    return arr.slice(-num);
  } else {
    return [];
  }
}

//  SortedWithValues(sortedByPoints, props.static));

export function SortedWithValues(arr, props) {
  let res = [];
  for (const item of arr) {
    let gwArr = [];
    for (const gwItem of item) {
      for (const staticItem of props.elements) {
        if (gwItem.id === staticItem.id) {
          let data = {};
          data.id = staticItem.id;
          data.points = gwItem.stats.total_points;
          data.position = staticItem.element_type;
          data.name = staticItem.web_name;
          data.team = props.teams.filter((val) => {
            if (staticItem.team_code === val.code) {
              return val;
            }
          })[0].name;
          gwArr.push(data);
        }
      }
    }
    res.push(gwArr);
  }
  return res;
}

export function SortedByPosition(arr) {
  let result = [];

  for (const gwArr of arr) {
    let innerArr = {};
    let Gk = {};
    let Def = {};
    let Mf = {};
    let Fw = {};
    for (const player of gwArr) {
      switch (player.position) {
        case 1:
          Gk[player.id] = player;
          break;
        case 2:
          Def[player.id] = player;
          break;
        case 3:
          Mf[player.id] = player;
          break;
        case 4:
          Fw[player.id] = player;
          break;
      }

      innerArr.goalkeepers = Gk;
      innerArr.defenders = Def;
      innerArr.midfielders = Mf;
      innerArr.forwards = Fw;
    }
    result.push(innerArr);
  }
  return result;
}

export function Round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export function GetThreeWeekAverage(arrOfObj) {
  //first slice
  const data = GetLastXElements(arrOfObj, 3);
  if (data.length === 0) {
   console.log( "Data object of insufficent length")
   return
  }

  let result = {};
  let goalkeepers = {};
  let defenders = {};
  let midfielders = {};
  let forwards = {};

  //goalies
  for (let key in data[2].goalkeepers) {
    if (
      data[1].goalkeepers.hasOwnProperty(key) &&
      data[0].goalkeepers.hasOwnProperty(key)
    ) {
      goalkeepers[key] = data[2].goalkeepers[key];
      goalkeepers[key].points = Round(
        (data[2].goalkeepers[key].points +
          data[1].goalkeepers[key].points +
          data[0].goalkeepers[key].points) /
          3,
        1
      );
    }
  }
  result.goalkeepers = goalkeepers;

  //defence
  for (let key in data[2].defenders) {
    if (
      data[1].defenders.hasOwnProperty(key) &&
      data[0].defenders.hasOwnProperty(key)
    ) {
      defenders[key] = data[2].defenders[key];
      defenders[key].points = Round(
        (data[2].defenders[key].points +
          data[1].defenders[key].points +
          data[0].defenders[key].points) /
          3,
        1
      );
    }
  }
  result.defenders = defenders;

  //midfielders
  for (let key in data[2].midfielders) {
    if (
      data[1].midfielders.hasOwnProperty(key) &&
      data[0].midfielders.hasOwnProperty(key)
    ) {
      midfielders[key] = data[2].midfielders[key];
      midfielders[key].points = Round(
        (data[2].midfielders[key].points +
          data[1].midfielders[key].points +
          data[0].midfielders[key].points) /
          3,
        1
      );
    }
  }
  result.midfielders = midfielders;

  //forwards
  for (let key in data[2].forwards) {
    if (
      data[1].forwards.hasOwnProperty(key) &&
      data[0].forwards.hasOwnProperty(key)
    ) {
      forwards[key] = data[2].forwards[key];
      forwards[key].points = Round(
        (data[2].forwards[key].points +
          data[1].forwards[key].points +
          data[0].forwards[key].points) /
          3,
        1
      );
    }
  }
  result.forwards = forwards;

  return result;
}


export function GetFiveWeekAverage(arrOfObj) {
  console.log('ARRRR', arrOfObj);
  //first slice
  const data = arrOfObj.length >= 5 ? GetLastXElements([...arrOfObj], 5): GetLastXElements([...arrOfObj], arrOfObj.length)
  if (data.length === 0) {
   console.log( "Data object of insufficent length")
   return
  }

  console.log('data from 5 week', data);

  let result = {};
  let goalkeepers = {};
  let defenders = {};
  let midfielders = {};
  let forwards = {};

  let dataLength =  arrOfObj.length


     for(let key in data[dataLength-1].goalkeepers){
  
            goalkeepers[key] =data[dataLength-1].goalkeepers[key]
          //  goalkeepers[key].points = data[dataLength-1].goalkeepers.points+data[dataLength-2].goalkeepers.points
     }
     
     console.log('goalies', goalkeepers, Object.keys(goalkeepers).length,Object.keys(data[dataLength-1].goalkeepers).length );
  
     let dataLess = dataLength -1

     for(let i=dataLess; i >= 0 ; i--){
      for(let key in goalkeepers){
        if(data[i].goalkeepers.hasOwnProperty(key)){
          goalkeepers[key].points = goalkeepers[key].points +
           data[i].goalkeepers[key].points
        }else{
             delete goalkeepers[key]
         }

      }
     }
     
    
    console.log('goalies 2!', goalkeepers, Object.keys(goalkeepers).length,Object.keys(data[dataLength-1].goalkeepers).length );

}













  // Function to sort players by age for use with week average returns
  //returns final values for to send to client
  export function SortPlayersByPoints(arr,category) {
  // Convert the category object into an array
  const playersArray = Object.values(arr[category]);

  // Sort the array by age
  playersArray.sort((a, b) => b.points - a.points);


  // Create a new object with sorted players
  // const sortedPlayers = {};
  // playersArray.forEach((player, index) => {
  //   sortedPlayers[index + 1] = player;
  // });

  return playersArray;
}