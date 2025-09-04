function getscore(...scores){
    let total = 0;
    scores.forEach(function(val){
        total += val;
    } );
    return total;
}

console.log(getscore(10,34,54,43,56));