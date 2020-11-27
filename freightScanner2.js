function scan(str){
    let i;
    let timA = [];
    for (i = 0; i < str.length; i++){
        if (str[i] == 'contraband'){
            timA.push(i);
        }
    }
    return timA;
}

console.log(scan(['yo', 'contraband', 'ma', 'contraband', 'lopes', 'tuia', 'contraband']));