// Question 2: Write a javascript
//function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should return [1,3]


const answer = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++)
            if (array[i] + array[j] === value) {
                return [array[i], array[j]];
            }
    }
    return `No matching pair found in given array [${array}]`;
}

answer([1, 2, 3], 4);