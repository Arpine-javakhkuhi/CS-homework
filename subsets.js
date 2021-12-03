function subsets(arr, itemsLength) {
    return createSubset([], 0, [...arr], itemsLength);
}

function createSubset(innerArr, startInd, arr, itemsLength) {
    let output = [];
    let tmpArr = [];
    for (let i = startInd; i < arr.length; i++) {
        tmpArr = [...innerArr];
        tmpArr.push(arr[i]);
        if (tmpArr.length < itemsLength) {
            output = output.concat(createSubset(tmpArr, i + 1, arr, itemsLength))
        } else {
            output.push(tmpArr);
        }
    }
    return output;

}

// let res = subsets([1, 2, 3, 4], 2);
// let res = subsets([1,2,3,4], 3);
let res = subsets([1,2,3,4,5], 3);

console.log('result -> ', res)


