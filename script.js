const treeNodes = [
    { parent: null, id: 0 },
    { parent: 0, id: 1 },
    { parent: 0, id: 2 },
    { parent: 1, id: 3 },
    { parent: 1, id: 4 },
    { parent: 2, id: 5 },
    { parent: 4, id: 6 },
];

function createTree(arr) {
    let expectedObj = {};
    let parentId = 0;
    arr.forEach(element => {
        if (element.parent === null) {
            expectedObj[element.id] = {};
        } else {
            parentId = element.parent;
            createNode(element, expectedObj, parentId);
        }
    });

    return JSON.stringify(expectedObj);
}

function createNode(node, tree, parentId) {
    for (let branch in tree) {
        if (branch == node.parent) {
            tree[branch][node.id] = {};
        } else {
            createNode(node, tree[branch], parentId);
        }
    }
}

let result = createTree(treeNodes);
console.log(`result: ${result}`);