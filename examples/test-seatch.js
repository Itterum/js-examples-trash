import { data } from './generate-data.js'

function testSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
}

console.log(testSearch(data, 75))
