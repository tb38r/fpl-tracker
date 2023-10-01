import cloneDeep from "lodash.clonedeep";

export async function GetAllPlayerData(fn) {
  

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

export async function GetAllGameweeksData(fn) {
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


// export async function GetAllGameweeksData(fn) {
//   let result = [];

//   for (let i = 1; i < 39; i++) {
//     let data = await fn(i);
//     if (data.elements.length === 0) break;
//     result.push(data);
//   }

//   return result;
// }

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
  if (arr.length === 0) {
    return [];
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
          data.firstName = staticItem.first_name;
          data.secondName = staticItem.second_name;
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

export function SortValueForMoney(arr) {
  arr.sort((a, b) => b.value_season - a.value_season);

  return arr;
}

export function getFirstXInstancesOfEachType(arr, desiredLength) {
  const result = {};

  const typeToString = {
    1: "goalkeepers",
    2: "defenders",
    3: "midfielders",
    4: "forwards",
  };

  for (const obj of arr) {
    const type = typeToString[obj.element_type];

    if (!result[type]) {
      result[type] = [];
    }

    if (result[type].length < desiredLength) {
      result[type].push(obj);
    }

    if (Object.keys(result).every((arr) => arr.length === desiredLength)) {
      break;
    }
  }

  return result;
}

export function ParseHistoricalDrawerContent(playerobj, teamobj) {
  if (playerobj.history.length < 3) {
    console.log("Insufficient data to create card");
    return;
  }

  let result = [];
  const data = GetLastXElements(playerobj.history, 3);

  for (let i = 2; i >= 0; i--) {
    let gwObj = {};
    gwObj.isHome = data[i].was_home;
    gwObj.opponent = teamobj[data[i].opponent_team - 1].name;
    gwObj.awayScore = data[i].team_a_score;
    gwObj.homeScore = data[i].team_h_score;
    gwObj.totalPoints = data[i].total_points;

    let netScore = data[i].team_h_score - data[i].team_a_score;

    if (netScore > 0) {
      if (data[i].was_home) {
        gwObj.didWinColor = "text-xs md:text-x text-green-700 font-bold";
      } else {
        gwObj.didWinColor = "text-xs md:text-x text-red-700 font-bold";
      }
    } else if (netScore < 0) {
      if (data[i].was_home) {
        gwObj.didWinColor = "text-xs md:text-x text-red-700 font-bold";
      } else {
        gwObj.didWinColor = "text-xs md:text-x text-green-700 font-bold";
      }
    } else {
      gwObj.didWinColor = "text-xs md:text-x text-blue-500 font-bold";
    }

    result.push(gwObj);
  }

  return result;
}

export function ParseFutureDrawerContent(playerobj, teamobj) {
  if (playerobj.history.length < 1) {
    console.log("Insufficient data to create future card");
    return;
  }

  let result = [];
  const data = playerobj.fixtures.slice(0, 3);

  for (let i = 0; i < 3; i++) {
    let futureObj = {};

    futureObj.isHome = data[i].is_home;

    const dateObj = new Date(data[i].kickoff_time);
    const dateToString = dateObj.toDateString();

    futureObj.date = dateToString;
    futureObj.id = data[i].id;
    futureObj.opponent = data[i].is_home
      ? teamobj[data[i].team_a - 1].name
      : teamobj[data[i].team_h - 1].name;

    result.push(futureObj);
  }

  return result;
}

export function SortHotshot(arr) {
  if (arr.length < 1) return;

  let result = {};
  let data = arr[arr.length - 1];

  const arrayOfGoalies = Object.values(data.goalkeepers);
  const sortedArrayOfGoalies = arrayOfGoalies.sort(
    (a, b) => b.points - a.points
  );

  const arrayOfDefenders = Object.values(data.defenders);
  const sortedArrayOfDefenders = arrayOfDefenders.sort(
    (a, b) => b.points - a.points
  );

  const arrayOfMidfielders = Object.values(data.midfielders);
  const sortedArrayOfMidfielders= arrayOfMidfielders.sort(
    (a, b) => b.points - a.points
  );

  

  const arrayOfForwards = Object.values(data.forwards);
  const sortedArrayOfForwards= arrayOfForwards.sort(
    (a, b) => b.points - a.points
  );

  result.goalkeepers = sortedArrayOfGoalies.slice(0,5)
  result.defenders = sortedArrayOfDefenders.slice(0,5)
  result.midfielders = sortedArrayOfMidfielders.slice(0,5)
  result.forwards = sortedArrayOfForwards.slice(0,5)

  return result;
}
