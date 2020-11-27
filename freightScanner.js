function scan(str){
    let i;
    let timA = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] == 'contraband'){
            timA++;
        }
    }
    return timA;
}

console.log(scan(['yo', 'contraband', 'ma', 'contraband', 'lopes', 'tuia', 'contraband']));

// const test = ['yo', 'contraband', 'ma', 'contraband', 'lopes', 'tuia', 'contraband'];

// console.log(test.length);