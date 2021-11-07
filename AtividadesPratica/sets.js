const meuArrays = [30, 23, 546, 5, 3243, 8976, 7, 5, 546]

function valoresUnicos (arr) {
    const mySet = new Set(arr);

    return [...mySet]
}

console.log(valoresUnicos(meuArrays))