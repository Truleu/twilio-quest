function addFirstToLast(str){
    let conc;
    if (str.length == 0){
        conc = String(str);
    } else if (str.length > 0){
        conc = str[0] + str[str.length - 1];
    };
    return conc;
}
