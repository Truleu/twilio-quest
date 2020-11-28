function calculateMass(arr){
    //let reducer = (sum, current) => sum + current;
    return arr.map(arr => arr.length).reduce((sum, current) => sum + current, 0);
    
};

/* 
    Above is my attempt to solve this one. I mean, I did solve it but the game thinks otherwise. It says I didn't return a number (?). Might be a glitch, might be it's considering the arrow function used in reduce instead of the global function. I'm probably coming back to this one and try to shove it all in one single return line.

    P.S.: Ok, I just forgot what map is used for and had to read the documentation all over again. Now it's as good as it could be. (I did use the found solution as example, but the real point here is that I was able to learn) 
    Some bad things really happen when you don't actually code for 2 months.

    Below is the solution I found from github account cinexin, committed by user catsdontfly
*/

// function calculateMass(freights) {
// 	return freights.map(freight => freight.length).reduce((sum, current) => sum + current, 0);
// }

const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // should be 12
console.log(typeof(mass));
