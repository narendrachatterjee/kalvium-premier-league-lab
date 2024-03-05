//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  const managerDetails = [managerName, managerAge, currentTeam, trophiesWon];
  return managerDetails;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  const formationObject = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2]
  };

  return formationObject;
} 
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  const filteredPlayers = players.filter(player => player.debut === year);
  return filteredPlayers;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  const filteredPlayers = players.filter(player => player.position === position);
  return filteredPlayers;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  const filteredPlayers = players.filter(player => player.awards.includes(award));
  return filteredPlayers;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, numTimes) {
  const filteredPlayers = players.filter(player => player.awards.filter(award => award === awardName).length === numTimes);
  return filteredPlayers;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  const filteredPlayers = players.filter(player => player.awards.includes(awardName) && player.country === country);
  return filteredPlayers;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  const filteredPlayers = players.filter(player => player.awards.length >= noOfAwards && player.currentTeam === team && player.age < age);
  return filteredPlayers;
}
//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  const sortedPlayers = players.slice().sort((a, b) => b.age - a.age);
  return sortedPlayers;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
  const teamPlayers = players.filter(player => player.currentTeam === team);
  const sortedPlayers = teamPlayers.slice().sort((a, b) => b.awards.length - a.awards.length);
  return sortedPlayers;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByNamexAwardxTimes(awardName, noOfTimes, country) {
  const filteredPlayers = players.filter(player => player.awards.filter(award => award === awardName).length === noOfTimes && player.country === country);
  const sortedPlayers = filteredPlayers.slice().sort((a, b) => a.name.localeCompare(b.name));
  return sortedPlayers;
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age) {
  const olderPlayers = players.filter(player => player.age > age);
  const sortedPlayers = olderPlayers.slice().sort((a, b) => {
    // Assuming awards have a date property for sorting
    return b.awards[0].date - a.awards[0].date;
  });
  return sortedPlayers;
}
