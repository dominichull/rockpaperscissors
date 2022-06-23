function startGame(bestOf = 1){
    if (bestOf == 1) {
        firstTo = 1
    } 

    else if ((bestOf % 2) == 0) {
       firstTo = (bestOf / 2) + 1;
    } 

    else if ((bestOf % 2) == 1) {
        firstTo = (bestOf / 2) + 0.5;
    } 
    else {
        alert ('Please enter a number')
        firstTo = 'Non-existent';
    }
    console.log(firstTo);
}