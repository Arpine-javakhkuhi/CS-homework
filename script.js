const treeNodes = [
    { parent: null, id: 0 },
    { parent: 0, id: 1 },
    { parent: 0, id: 2 },
    { parent: 1, id: 3 },
    { parent: 1, id: 4 },
    { parent: 2, id: 5 },
    { parent: 4, id: 6 },
];

let expectedObj = {};
let tmpObj = {};
let parentId = 0;

function createTree(arr) {
    arr.forEach((el) => {
        if (el.parent === null) {
            Object.assign(tmpObj[el.id] = tmpObj[el.id] || {}, el.id);
        }
        if (el.parent !== null) {
            tmpObj[el.parent] = tmpObj[el.parent] || {};
            tmpObj[el.parent][el.id] = tmpObj[el.parent][el.id] || {};
            Object.assign(tmpObj[el.parent], tmpObj[el.parent][el.id] || {})
        }
        parentId = el.parent;
    });
    return tmpObj;
}

let result1 = createTree(treeNodes);
console.log('result', result1);