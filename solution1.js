// Question 1: Clean the room function: given an input of
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual
// array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2],
// 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number
// types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const groupArray = (input) => {
    const tempArray = [];
    const buildObj = {};
    for (let i of input) {
        buildObj[i] = buildObj[i] + 1 || 1;
    }
    let initialIndex = 0;
    for (let i in buildObj) {
        if (buildObj[i] === 1) {
            tempArray.push(input[initialIndex]);
            initialIndex++;
        } else {
            let lastIndex = buildObj[i] + initialIndex;
            tempArray.push(input.slice(initialIndex, lastIndex));
            initialIndex = lastIndex;
        }
    }
    return tempArray;
};

const answer = array => {
    const numberArray = groupArray(array
        .filter(number => typeof(number) === 'number')
        .sort((a, b) => a - b)
    );
    const stringArray = groupArray(array
        .filter(number => typeof(number) === 'string')
        .sort((a, b) => a - b)
    );
    const finalArray = [numberArray].concat([stringArray]);
    return stringArray.length ? finalArray : numberArray;
};

answer([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]);
answer([1, "2", "3", 2]);