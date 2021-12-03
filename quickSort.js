/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} rigth
 */

function quickSort(arr, left, rigth) {
    let ind;

    if (arr.length < 2) {
        return arr;
    }

    if (arr.length > 1) {
        ind = partition(arr, left, rigth);

        if (left < ind - 1) {
            quickSort(arr, left, ind - 1);
        }

        if (ind < rigth) {
            quickSort(arr, ind, rigth);
        }
    }

    return arr;
}

/**
 *
 * @param {nuber[]} arr
 * @param {number} left
 * @param {number} right
 */

function partition(arr, left, right) {

    let pivot = arr[Math.floor((left + right) / 2)];
    let leftPointer = left;
    let rightPointer = right;

    while (leftPointer <= rightPointer) {
        while (arr[leftPointer] < pivot) {
            leftPointer++
        }

        while (arr[rightPointer] > pivot) {
            rightPointer--;
        }

        if (leftPointer <= rightPointer) {
            swap(arr, leftPointer, rightPointer)
            leftPointer++;
            rightPointer--;
        }
    }
    return leftPointer;
}


/**
 *
 * @param {number[]} arr
 * @param {number} leftInd
 * @param {number} rightInd
 */


function swap(arr, leftInd, rightInd) {
    let tmp = arr[leftInd];
    arr[leftInd] = arr[rightInd];
    arr[rightInd] = tmp;
}

let arrForSort = [2, 5, 4, 8, 6, 22, 14, 20, 3, 10, 1, 45];
let quickSortResult = quickSort(arrForSort, 0, arrForSort.length - 1)

console.log(`Sorted array: ${quickSortResult}`);
