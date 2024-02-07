import analyzeArray from "../code/analyzeArray";

test('Analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('Analyze array', () => {
    expect(analyzeArray([9, 2, 6, 7, 11])).toEqual({
        average: 7,
        min: 2,
        max: 11,
        length: 5
    })
})