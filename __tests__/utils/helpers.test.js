
import { GetLastXElements } from "@/app/utils/helpers"
import { MockSortedByPointsData } from "./mocks/testSortedByPoints"


describe('Test suite of helper functions', ()=>{
    test('GetLastX, test return conditions', ()=>{
        const testCases = [
            [1,2,3,4,5,6,7,8],
            [],
            [1,2,3,4,5]

        ]

        let result = GetLastXElements(testCases[0], 4)

        expect(result).toHaveLength(4)

        result = GetLastXElements(testCases[1], 4)

        expect(result).toHaveLength(0)

        result = GetLastXElements(testCases[0], -1)
        expect(result).toHaveLength(0)


        result = GetLastXElements(testCases[2], 0)
        expect(result).toHaveLength(5)


    })



    test('SortedWithValues+SortedByPosition Chain', ()=>{
        
        



    })
})