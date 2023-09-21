import cloneDeep from "lodash.clonedeep";

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
    if(arr.length === 0){
      return []
    }

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
    console.log("Data object of insufficent length");
    return;
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

export function GetFiveWeekAverage(obj) {
  let arrOfObj = JSON.parse(JSON.stringify(obj));

  let arrForSlice = JSON.parse(JSON.stringify(arrOfObj));
  //first slice
  const data =
    arrOfObj.length >= 5
      ? GetLastXElements(arrForSlice, 5)
      : GetLastXElements(arrForSlice, arrForSlice.length);

  if (data.length === 0) {
    console.log("Data object of insufficent length");
    return;
  }

  let result = {};
  let goalkeepers = {};
  let defenders = {};
  let midfielders = {};
  let forwards = {};

  let dataLength = arrOfObj.length >= 5 ? 5 : arrOfObj.length;

  for (let key in data[dataLength - 1].goalkeepers) {
    goalkeepers[key] = data[dataLength - 1].goalkeepers[key];
  }

  for (let key in data[dataLength - 1].defenders) {
    defenders[key] = data[dataLength - 1].defenders[key];
  }

  for (let key in data[dataLength - 1].midfielders) {
    midfielders[key] = data[dataLength - 1].midfielders[key];
  }

  for (let key in data[dataLength - 1].forwards) {
    forwards[key] = data[dataLength - 1].forwards[key];
  }

  let dataLess = dataLength - 2;
  let arrForLoop = cloneDeep(arrForSlice);

  for (let i = dataLess; i >= 0; i--) {
    for (let key in goalkeepers) {
      if (arrForLoop[i].goalkeepers.hasOwnProperty(key)) {
        goalkeepers[key].points =
          goalkeepers[key].points + arrForLoop[i].goalkeepers[key].points;
      } else {
        delete goalkeepers[key];
      }
    }
  }

  result.goalkeepers = goalkeepers;

  for (let i = dataLess; i >= 0; i--) {
    for (let key in defenders) {
      if (arrForLoop[i].defenders.hasOwnProperty(key)) {
        defenders[key].points =
          defenders[key].points + arrForLoop[i].defenders[key].points;
      } else {
        delete defenders[key];
      }
    }
  }

  result.defenders = defenders;

  for (let i = dataLess; i >= 0; i--) {
    for (let key in midfielders) {
      if (arrForLoop[i].midfielders.hasOwnProperty(key)) {
        midfielders[key].points =
          midfielders[key].points + arrForLoop[i].midfielders[key].points;
      } else {
        delete midfielders[key];
      }
    }
  }

  result.midfielders = midfielders;

  for (let i = dataLess; i >= 0; i--) {
    for (let key in forwards) {
      if (arrForLoop[i].forwards.hasOwnProperty(key)) {
        forwards[key].points =
          forwards[key].points + arrForLoop[i].forwards[key].points;
      } else {
        delete forwards[key];
      }
    }
  }

  result.forwards = forwards;

  return ReturnAverage(result, dataLength);
}

export function GetTenWeekAverage(obj) {
  let arrOfObj = JSON.parse(JSON.stringify(obj));

  let arrForSlice = JSON.parse(JSON.stringify(arrOfObj));
  //first slice
  const data =
    arrOfObj.length >= 10
      ? GetLastXElements(arrForSlice, 10)
      : GetLastXElements(arrForSlice, arrForSlice.length);

  if (data.length === 0) {
    console.log("Data object of insufficent length");
    return;
  }

  let result = {};
  let goalkeepers = {};
  let defenders = {};
  let midfielders = {};
  let forwards = {};

  let dataLength = arrOfObj.length >= 10 ? 10 : arrOfObj.length;

  for (let key in data[dataLength - 1].goalkeepers) {
    goalkeepers[key] = data[dataLength - 1].goalkeepers[key];
  }

  for (let key in data[dataLength - 1].defenders) {
    defenders[key] = data[dataLength - 1].defenders[key];
  }

  for (let key in data[dataLength - 1].midfielders) {
    midfielders[key] = data[dataLength - 1].midfielders[key];
  }

  for (let key in data[dataLength - 1].forwards) {
    forwards[key] = data[dataLength - 1].forwards[key];
  }

  let dataLess = dataLength - 2;
  let arrForLoop = cloneDeep(arrForSlice);

  for (let i = dataLess; i >= 0; i--) {
    for (let key in goalkeepers) {
      if (arrForLoop[i].goalkeepers.hasOwnProperty(key)) {
        goalkeepers[key].points =
          goalkeepers[key].points + arrForLoop[i].goalkeepers[key].points;
      } else {
        delete goalkeepers[key];
      }
    }
  }

  result.goalkeepers = goalkeepers;

  for (let i = dataLess; i >= 0; i--) {
    for (let key in defenders) {
      if (arrForLoop[i].defenders.hasOwnProperty(key)) {
        defenders[key].points =
          defenders[key].points + arrForLoop[i].defenders[key].points;
      } else {
        delete defenders[key];
      }
    }
  }

  result.defenders = defenders;

  for (let i = dataLess; i >= 0; i--) {
    for (let key in midfielders) {
      if (arrForLoop[i].midfielders.hasOwnProperty(key)) {
        midfielders[key].points =
          midfielders[key].points + arrForLoop[i].midfielders[key].points;
      } else {
        delete midfielders[key];
      }
    }
  }

  result.midfielders = midfielders;

  for (let i = dataLess; i >= 0; i--) {
    for (let key in forwards) {
      if (arrForLoop[i].forwards.hasOwnProperty(key)) {
        forwards[key].points =
          forwards[key].points + arrForLoop[i].forwards[key].points;
      } else {
        delete forwards[key];
      }
    }
  }

  result.forwards = forwards;

  return ReturnAverage(result, dataLength);
}

// Function to sort players by age for use with week average returns
//returns final values for to send to client
export function SortPlayersByPoints(arr, category) {
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

function ReturnAverage(arr, divisor) {
  let copiedArr = JSON.parse(JSON.stringify(arr));

  for (const key in copiedArr) {
    for (const innerKey in copiedArr[key]) {
      for (let varKey in copiedArr[key][innerKey]) {
        if (varKey === "points" && copiedArr[key][innerKey][varKey] > 0) {
          copiedArr[key][innerKey][varKey] = Round(
            copiedArr[key][innerKey][varKey] / divisor,
            1
          );
        }
      }
    }
  }

  return copiedArr;
}


export function SortValueForMoney(arr){


 
   arr.sort(
    (a,b)=> b.value_season - a.value_season
  )
 
  return arr

}
