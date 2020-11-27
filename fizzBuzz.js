const argumentValue = Number(process.argv[2]);

let output = '';

let three = argumentValue % 3;
let five = argumentValue % 5;

if (three === 0){
    output += 'Java';
}

if (five === 0){
    output += 'Script';
} 

if (three !== 0 && five !== 0) {
    output = String(argumentValue);
};

console.log(output);