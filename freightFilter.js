function scanAndFilter(arr, str){
    let filtered = arr.filter(word => word != str);
    return filtered;
}

console.log(scanAndFilter(['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'], 'ray guns'));

// let lop = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

// let result = lop.filter(word => word != 'ray guns');

// console.log(result);

