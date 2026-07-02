function intersectio(arr1, arr2) {

    let result = [];

    // Add elements from first array
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }

    // Add elements from second array
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }

    // Remove duplicates using Set
    let uniqueResult = new Set(result);

    return Array.from(uniqueResult);
}

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

console.log(intersection(arr1, arr2));