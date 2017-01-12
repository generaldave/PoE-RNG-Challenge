// Random integer including bounds
function randint(min, max) {
    min = Math.ceil(min) ;
    max = Math.floor(max) ;
    rnd  = Math.floor(Math.random() * (max - min + 1)) + min ;
    return rnd
} ;

// Find random number, given the number of possibilities and span
// per possibility.
// For example:
//     itemCount = 7
//     span = 10
//     upper would = 7 * 10 = 70
//     possibilities:
//          1:  1  - 10
//          2 : 11 - 20
//          3 : 21 - 30
//          4 : 31 - 40
//          5 : 41 - 50
//          6 : 51 - 60
//          7 : 61 - 70
function randomnumber(itemCount, span) {
    lower = 1 ;
    upper = itemCount  * span ;
    number = randint(lower, upper) ;
    range = span ;
    count = 0 ;
    found = false ;
    while (range <= upper && ! found) {
        count = count + 1 ;
        if (number <= range) {
            found = true ;
        } else {
            range = range + span ;
        } ;
    } ;
    return count ;
} ;
