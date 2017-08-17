var people = [['Tobias', 'Brage', 1995],['Simon', 'Ventrup', 1993],['Frederik', 'Resenbro', 1996]];
var persId = 0;
var curDate = new Date();

people.forEach(function(){
    var yearsOld = curDate.getFullYear() - people[persId][2];
    console.log(persId + 1 + '. ' + people[persId][0] + ' ' + people[persId][1] + ' er ' + yearsOld + ' år gammel.');
    persId ++;
});