// function calculateMass(arr){
//     let total = 0;
//     let reducer = (sum, current) => sum + current;
//     let result = arr.reduce(reducer, 0);
//     total = result.length - 1;
//     return total;
// };

/* 
    Above is my attempt to solve this one. I mean, I did solve it but the game thinks otherwise. It says I didn't return a number (?). Might be a glitch, might be it's considering the arrow function used in reduce instead of the global function. I'm probably coming back to this one and try to shove it all in one single return line.

    Below is the solution I found from github account cinexin, committed by user catsdontfly
*/

function calculateMass(freights) {
	return freights.map(freight => freight.length).reduce((sum, current) => sum + current, 0);
}

// const mass = calculateMass(['dog', 'donkey', 'cat']);
// console.log('Total mass of items is ' + mass); // should be 12
// console.log(typeof(mass));
