// functions that use the data and interact with user


function displayStats(searchResults){
  /*
  Purpose: Display the game stats the user wants to find (will also clear the old results)
  Parameters: list of JSONs that relate to the user's searh
  Returns: None
  */
  console.log("in display stats")
  resultsDiv.innerHTML = "<br><h3>Search Results</h3>";
  for (i = 0; i < searchResults.length; i++){

    // Display name and number of goals
    if (searchResults[i]['fname'] != ""){
      resultsDiv.innerHTML +="<br>Name: " + searchResults[i]['fname'] + " - ";
    } else {
      resultsDiv.innerHTML +="<br>Name: NA - ";
    }

    if (searchResults[i]['numGoals'] != ""){
      resultsDiv.innerHTML +="Num Goals: " + searchResults[i]['numGoals'] + " - ";
    } else {
      resultsDiv.innerHTML +="Num Goals: NA - ";
    }


    // // Display position (radio box)
    if (searchResults[i]['defense']) {
      resultsDiv.innerHTML +="Position: defense - ";
    } else if (searchResults[i]['midfield']) {
      resultsDiv.innerHTML +="Position: midfield - ";
    } else if (searchResults[i]['attack']) {
      resultsDiv.innerHTML +="Position: attack - ";
    }


    // Display big plays (checkboxes)

    var numBigPlays = 0;
    for (q = 0; q < 3; q++){
      if (searchResults[i]['bigPlays'][q]){
        numBigPlays++;
      }
    }
    resultsDiv.innerHTML +="Num big Plays: " + numBigPlays + " - ";

    // Display Game date
    if (searchResults[i]['gameDate'] != null){
      resultsDiv.innerHTML +="Date of Game: " + searchResults[i]['gameDate'];
    } else {
      resultsDiv.innerHTML +="Date of Game: NA";
    }

  }
}

function findStats(){
  /*
  Purpose: Use the player's inputted search information to find the stats they are looking for
  Parameters: None
  Returns: None - instead calls and passes info to the display stats function
  */
  var playerSearchNum = document.getElementById('playerSearchNum').value;
  if (games == null || games == ""){
  } else if (playerSearchNum.toLowerCase() == "all"){
    searchResults = games;
    displayStats(searchResults);
  } else if (playerSearchNum != ""){
    var searchResults = [];
    for (i = 0; i < games.length; i++){
      console.log(games[i]['playerNum']);
      if (games[i]['playerNum'] == playerSearchNum){
        console.log("shld be plyer num below");
        console.log(games[i]['playerNum']);
        searchResults.push(games[i]);
      }
    }
    displayStats(searchResults);
  }

  console.log("searchResults");
  console.log(searchResults);


}

//***************************************************************************//
//***************************************************************************//
//***************************************************************************//

// functions to do with getting, storing, and organizing Data

function getData(){
  /*
  Purpose: Get all the data from the current submission and store into a JSON
  Parameters: None
  Returns: A JSON of all the data
  */
  var fname = document.getElementById('fname').value;
  var playerNum = document.getElementById('playerNum').value;
  var numGoals = document.getElementById('numGoals').value;

  // Get the value of the radio boxes.
  var defense = document.getElementById('defense').checked;
  var midfield = document.getElementById('midfield').checked;
  var attack = document.getElementById('attack').checked;
  var positions = [defense, midfield, attack];

  // // Get the value of the check boxes.
  // Note: don't use but getting them just in case I want do something with them later after we learn more code
  var btb = document.getElementById('btb').checked;
  var icePick = document.getElementById('icePick').checked;
  var atw = document.getElementById('atw').checked;
  var bigPlays = [btb, icePick, atw];

  // get date
  var gameDate = document.getElementById('gameDate').value;

  // I know I could put the statements above direclty in here but putting them separately
  // made debugging easier
  gameStats = {
    "fname": fname,
    "playerNum": playerNum,
    "numGoals": numGoals,
    "defense": defense,
    "midfield": midfield,
    "attack": attack,
    "positions": positions,
    "btb": btb,
    "icePick": icePick,
    "atw": atw,
    "bigPlays": bigPlays,
    "gameDate": gameDate,
  }
  return gameStats;

}

function writeData(gameStats, games){
  /*
  Purpose: Add the current JSON data to the list of JSONs
  Parameters: the new JSON (type: JSON) and the list of JSONs (type: array)
  Returns: The updaded game list of JSONs
  */
  if (games != null){
    games.push(gameStats);

    stringGames = JSON.stringify(games);
    localStorage.setItem("games", stringGames);

    return games;

  } else {
    var games = [gameStats];

    stringGames = JSON.stringify(games);
    localStorage.setItem("games", stringGames);

    return games;
  }
}

function readData(){
  /*
  Purpose: Get the list of JSONs from local storage and return it
  Parameters: None
  Returns: A list of JSONs
  */
  stringGames = localStorage.getItem("games");
  games = JSON.parse(stringGames);
  if (games != null){
    return games;
  } else {
    return null;
  }
}

//***************************************************************************//
//***************************************************************************//
//***************************************************************************//

// Click event to attach to button
function myClick () {
  /*
  Purpose: Listen for a button press in order to change content on the page
           and display what the user inputted
  Parameters: None
  Returns: None
  */

  // Reading, writing, and updating the data
  gameStats = getData(); // the current data stored in a JSON
  games = writeData(gameStats, games); // updates the Games list and returns the updated list

  // some test code
  console.log(gameStats);
  console.log(JSON.stringify(gameStats));
  console.log(JSON.parse(JSON.stringify(gameStats)));
  console.log(games);
  console.log("alsdkfja;lksdjfkl;asdjf;"); //test marker

}

function myMouseOver() {
  document.getElementById('playerSearchNum').style.backgroundColor = "rgb(0,155,155)"
}

function myMouseOut() {
  document.getElementById('playerSearchNum').style.backgroundColor = ""
}
//***************************************************************************//
//***************************************************************************//
//***************************************************************************//

// Main Global variables also here becasue not in a function)
myDiv = document.getElementById("myDiv");
infoDiv = document.getElementById("infoDiv");
resultsDiv = document.getElementById("resultsDiv");
console.log(myDiv);

games = readData(); // variable of old info that will be added to - null if no previous data
