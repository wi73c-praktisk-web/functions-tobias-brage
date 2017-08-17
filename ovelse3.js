var curDate = new Date();
var persProfil = function (persId) {
    var yearsOld = curDate.getFullYear() - persId[2];
    return persId[0] + " " + persId[1] + ": Født " + persId[2] + ', ' + yearsOld + ' år gammel.';
}

var personOpl = ["Tobias", "Brage", 1995];

console.log(persProfil(personOpl));