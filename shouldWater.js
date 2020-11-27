const treeStatId = process.argv[2];
const drynessLvl = process.argv[3];

if (treeStatId == 0 && drynessLvl > 10){
    console.log('WATER');
};