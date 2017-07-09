function dwarfRollCall(dwarves) {
  var newDwarf = [];
  for (let i = 0; i < dwarves.length; i++) {
  newDwarf.push((i + 1) + '. ' + dwarves[i] + ' ')
  }
  return newDwarf.join('')
}

function summonCaptainPlanet(planeteerCalls){
  var planetGang = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
  planetGang.push(planeteerCalls[i].toUpperCase() + '!')
  }
  return planetGang
}


function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
    return true
    } else {
    return false
    }
  }
}

function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods.includes('camembert')) {
      return 'camembert'
    } else if (foods.includes('cheddar')) {
      return 'cheddar'
    } else if (foods.includes('gouda')) {
      return 'gouda'
    } else {
      return 'no cheese!';
    }
  }
}


/*
function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'camembert' || 'cheddar' || 'gouda') {
      return foods[i];
    } else {
      return 'no cheese!';
    }
  }
}
*/
