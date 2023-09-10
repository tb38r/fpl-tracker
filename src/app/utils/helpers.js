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
    return GW.elements.sort((a, b) => b.stats.total_points - a.stats.total_points);
  });
}


//should return an arr of arr[8]s
export function TopEight(arr) {
  return arr.map((item) => item.slice(0, 8));
}

//  SortedWithValues(sortedByPoints, props.static));

export function SortedWithValues(arr, props){
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
  return res
}



export function SortedByPosition(arr) {
  let result = [];

  for (const gwArr of arr) {
    
    let innerArr = {};
    let Gk = [];
    let Def = [];
    let Mf = [];
    let Fw = [];
    for (const player of gwArr) {

      switch (player.position) {
        case 1:
          Gk.push(player);
          break;
        case 2:
          Def.push(player);
          break;
        case 3:
          Mf.push(player);
          break;
        case 4:
          Fw.push(player);
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