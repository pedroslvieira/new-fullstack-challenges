const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  const goods = ['Hobbits', 'Elves', 'Dwarves', 'Eagles'];
  if (goods.includes(soldierType)) {
    return true;
  }
  return false;
};

const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
  const soldiersArray = battlefield.split(',');
  let soldiersObject = {};
  soldiersArray.forEach((soldier) => {
    const soldierArray = soldier.split(':');
    soldiersObject[`${soldierArray[0]}`] = parseInt(soldierArray[1]);
  });
  return soldiersObject;
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
  const soldiersObject = buildSoldierObject(battlefield);
  let goods = 0;
  let evils = 0;
  Object.keys(soldiersObject).forEach((soldier) => {
    if (isGood(soldier)) {
      goods += soldiersObject[soldier];
    } else {
      evils += soldiersObject[soldier];
    }
  });
  if (goods > evils) {
    return "Good";
  } else if (goods < evils) {
    return "Evil";
  }
  return "Tie";
};

console.log(whoWinsTheWar('Elves:3,Eagles:5,Goblins:2,Uruk-hai:6'));


module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
