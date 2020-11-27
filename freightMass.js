function calculateMass(arr){
    
    function sum(acc, elem){
        return acc + elem;
    };
    let answer = arr.reduce(sum, elem);
    console.log(answer);
    return;
};

calculateMass(['lopes', 'cacilda', 'tuia', 'barbosa', 'jurema'])

//console.log(calculateMass(['lopes', 'cacilda', 'tuia', 'barbosa', 'jurema']));

// let arra = ['lopes', 'cacilda', 'tuia', 'barbosa', 'jurema'];

// function sum(acc, varr){
//     return acc + varr;
// }
// let answer = arra.reduce(sum).length;
// console.log(answer);

// let i = 0;
// for 

// let soma = arra.reduce(function (allN, nam){
//     for ()
// })