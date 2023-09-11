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
