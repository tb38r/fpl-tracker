import {
  GetLastXElements,
  GetTenWeekAverage,
  GetThreeWeekAverage,
  SortedByPosition,
} from "@/app/utils/helpers";
import { MockSortedByPointsData } from "./mocks/SortedByPoints";
import { MockSortedByPosition } from "./mocks/MockSortedByPosition";

describe("Test suite of helper functions", () => {
  test("GetLastX, test return conditions", () => {
    const testCases = [[1, 2, 3, 4, 5, 6, 7, 8], [], [1, 2, 3, 4, 5]];

    let result = GetLastXElements(testCases[0], 4);

    expect(result).toHaveLength(4);

    result = GetLastXElements(testCases[1], 4);

    expect(result).toHaveLength(0);

    result = GetLastXElements(testCases[0], -1);
    expect(result).toHaveLength(0);

    result = GetLastXElements(testCases[2], 0);
    expect(result).toHaveLength(5);
  });

  test("SortedByPosition Chain", () => {
    //simulate sorted by position
    const result = SortedByPosition(MockSortedByPointsData);


    expect(result[0]).toHaveProperty("goalkeepers", {});
    expect(result[0]).toHaveProperty("defenders", {});
    expect(result[0]).toHaveProperty("midfielders", {});
    expect(result[0]).toHaveProperty("forwards", {});
  });

  test("Three Week Average", () => {
    const result = GetThreeWeekAverage(MockSortedByPosition);

    let isValid = true;
    let lock;
    let position;

    for (const key in result) {
      lock = true;
      for (const player in result[key]) {
        const keys = Object.keys(result[key][player]);

        if (lock) position = result[key][player][keys[2]];
        lock = false;
        if (result[key][player].position !== position) {
          isValid = false;
        }
      }
    }

    expect(isValid).toBeTruthy;
  });

  test("Ten Week Average", () => {
    const result = GetTenWeekAverage(MockSortedByPosition);

    let isValid = true;
    let lock;
    let position;

    for (const key in result) {
      lock = true;
      for (const player in result[key]) {
        const keys = Object.keys(result[key][player]);

        if (lock) position = result[key][player][keys[2]];
        lock = false;
        if (result[key][player].position !== position) {
          isValid = false;
        }
      }
    }

    expect(isValid).toBeTruthy;
  });
});
