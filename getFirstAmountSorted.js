function getFirstAmountSorted(arg1, arg2){
    let sorted = arg1.sort();
    let newArray = sorted.slice(0, arg2);
    return newArray;
}

console.log(getFirstAmountSorted(['bird', 'dog', 'cat', 'ant'], 2));

