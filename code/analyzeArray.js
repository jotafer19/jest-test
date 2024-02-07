export default function analyzeArray(array) {
    return {
        average: array.reduce((accumulated, currentValue) => accumulated + currentValue) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

console.log(analyzeArray([1,8,3,4,2,6]))