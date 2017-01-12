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
