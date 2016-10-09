var fs = require('fs');

var armies = {
    doges: [],
    cates: [],
    sneks: [],
    crusaders: [],
    assassins: []
};

var text = "";
text = fs.readFileSync('doges.txt', 'utf8');
armies.doges = addToArmy(text);
text = fs.readFileSync('cates.txt', 'utf8');
armies.cates = addToArmy(text);
text = fs.readFileSync('sneks.txt', 'utf8');
armies.sneks = addToArmy(text);
text = fs.readFileSync('crusaders.txt', 'utf8');
armies.crusaders = addToArmy(text);
text = fs.readFileSync('assassins.txt', 'utf8');
armies.assassins = addToArmy(text);

fs.writeFileSync('armies.json', JSON.stringify(armies));

function addToArmy(armyFrom) { //argunment - whats army text file you should parse
    var armyTo = armyFrom.split(' ');
    armyFrom = "";
    return (armyTo);
}