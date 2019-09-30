function average(scores){
    //add
    var total = 0;
    scores.forEach(function(score){
        total += score;
    });
    //divide
    var avg = total/scores.length
    //round avg
    return Math.round(avg);
}



let or const