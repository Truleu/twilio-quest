function calculatePower(arr){
    let newArr = arr.map(arr => arr * 2);
    let reducer = (sum, curr) => sum + curr;
    return result = newArr.reduce(reducer, 0);
}


const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24



/*          TESTING AREA BELOW          */

// const arra = [1, 2, 3, 4];

// let newArr = [];

// arra.forEach(function(elem){
//     return newArr.push(elem * 2);  /* And here is where I had to go look for what map is for */
// }); 

// console.log(newArr);