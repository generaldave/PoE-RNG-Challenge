// Constants
var CLASSES = ["Scion", "Witch", "Shadow", "Ranger",
                             "Duelist", "Marauder", "Templar"] ;
var ASCENDANCIES = [
    ["Ascendant"],
    ["Necromancer", "Elementalist", "Occultist"],
    ["Assassin", "Saboteur", "Trickster"],
    ["Deadeye", "Raider", "Pathfinder"],
    ["Slayer", "Gladiator", "Champion"],
    ["Juggernaut", "Berserker", "Chieftain"],
    ["Inquisitor", "Hierophant", "Guardian"],
] ;
var DEFENSE = ["Life", "Energy Shield"] ;
var OFFENSE = ["Attacks", "Spells"] ;
var WEAPON = ["Two-hand", "Dual wield", "One-hand"] ;
var TWO_HAND = ["Bow", "Staff", "Axe", "Mace", "Sword"] ;
var ONE_HAND = ["Claw", "Dagger", "Axe", "Sword", "Mace", "Wand"] ;

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

// Run app
function run(){
    // Decide Class
    var classID = randomnumber(7, 10) - 1 ;
    var className = CLASSES[classID] ;
    document.getElementById('class').innerHTML = className ;

    // Decide Ascendancy
    var ascendancyID = 0 ;
    if (classID !== 0) {
        ascendancyID = randomnumber(2, 10)  ;
    }
    var ascendancyName = ASCENDANCIES[classID][ascendancyID] ;
    document.getElementById('ascendancy').innerHTML = ascendancyName ;

    // Decide Defense type
    var defenseID = randomnumber(2, 10) - 1 ;
    var defenseName = DEFENSE[defenseID] ;
    document.getElementById('defense').innerHTML = defenseName ;

    // Decide Offense type
    var offenseID = randomnumber(2, 10) - 1 ;
    var offenseName = OFFENSE[offenseID] ;
    document.getElementById('offense').innerHTML = offenseName ;

    // Decide Weapon Type
    var weaponID = randomnumber(3, 10) - 1 ;
    var weaponName = WEAPON[weaponID] ;
    document.getElementById('weapon').innerHTML = weaponName ;

    // Decide Basetype
    // 2-hand
    if (weaponID === 0) {
        var baseID = randomnumber(5, 10) - 1 ;
        var baseName = TWO_HAND[baseID] ;
    }

    // 1-hand
    else {
        var baseID = randomnumber(6, 10) - 1 ;
        var baseName = ONE_HAND[baseID] ;
    }
    document.getElementById('basetype').innerHTML = baseName ;
} ;
