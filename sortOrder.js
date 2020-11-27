let argOne = String(process.argv[2]);
const argTwo = String(process.argv[3]);

let oneLower = argOne.toLowerCase();
let twoLower = argTwo.toLowerCase();

if (oneLower < twoLower){
    console.log(-1);
} else if (oneLower == twoLower){
    console.log(0);
} else if (oneLower > twoLower){
    console.log(1);
}

