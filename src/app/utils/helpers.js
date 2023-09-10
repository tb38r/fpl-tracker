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
// export function SortedByPoints(arr) {
//   let result = [];
//   const playerObjects = arr.map((GW) => GW.elements);

//   for (const item of playerObjects) {
//     const sortedPlayerObjects = item.sort(
//       (a, b) => b.stats.total_points - a.stats.total_points
//     );
//     result.push(sortedPlayerObjects);
//   }
//   return result;
// }

//should return an arr of arr[8]s
export function TopEight(arr) {
  return arr.map((item) => item.slice(0, 8));
}
