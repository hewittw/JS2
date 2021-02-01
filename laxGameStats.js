
// Google Sheets API Stuff

// Searching and displaying data

//***************************************************************************//
//***************************************************************************//
//***************************************************************************//

// functions that use the data and interact with user

function displayOptions(){
  /*
  Purpose: add html code to page that lets the user search through their data
  Parameters: None
  Returns: None
  */
}

//***************************************************************************//
//***************************************************************************//
//***************************************************************************//

// fucntions to do with getting, storing, and organizing Data

function getData(){
  /*
  Purpose: Get all the data from the current submission and store into a JSON
  Parameters: None
  Returns: A JSON of all the data
  */
  var fname = document.getElementById('fname').value; // can we just throw these into the json??????
  var playerNum = document.getElementById('playerNum').value;
  var numGoals = document.getElementById('numGoals').value;

  // Get the value of the radio boxes.
  var defense = document.getElementById('defense');
  var midfield = document.getElementById('midfield');
  var attack = document.getElementById('attack');
  var positions = [defense, midfield, attack];

  // // Get the value of the check boxes.
  // Note: don't use but getting them just in case I want do something with them later after we learn more code
  var btb = document.getElementById('btb');
  var icePick = document.getElementById('icePick');
  var atw = document.getElementById('atw');   // is there a better way to do this that does not need the list?????????
  var bigPlays = [btb, icePick, atw];

  // ADD OTHER INPUTS HERE !!!!!!!!!!!!!!!!!!!!

  // Talk to dr. j about the best way to store this data!!!!!
  gameStats = {
    "fname": document.getElementById('fname').value,
    "playerNum": document.getElementById('playerNum').value,
    "numGoals": document.getElementById('numGoals').value,
    "defense": defense,
    "midfield": midfield,
    "attack": attack,
    "positions": positions,
    "btb": btb,
    "icePick": icePick,
    "atw": atw,
    "bigPlays": bigPlays,
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
  games = readData(); // variable of old info - null if no previous data
  gameStats = getData(); // the current data stored in a JSON
  games = writeData(gameStats, games); // updates the Games list and returns the updated list


  // some test code
  console.log(gameStats);
  console.log(JSON.stringify(gameStats));
  console.log(JSON.parse(JSON.stringify(gameStats)));
  console.log(games);

  clicked = true; // now the other part of the program can be show / diplayed to user bc info was submitted
  displayOptions();

}

//***************************************************************************//
//***************************************************************************//
//***************************************************************************//


// Mainf (Global variables also here becasue not in a function)
myDiv = document.getElementById("myDiv");
console.log(myDiv);
var clicked = false;
