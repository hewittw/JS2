function findRadioBox (genders) {
  /*
  Purpose: Find the radio box selected
  Parameters: list of the radio box element id info stored in a variable
  Returns: the value of the clicked radio box element
  */
  for (i = 0; i < 3; i++) {
    if (genders[i].checked) {
      return genders[i].value;
    }
  }
}

// Click event to attach to button
function myClick () {
  /*
  Purpose: Listen for a button press in order to change content on the page
           and display what the user inputted
  Parameters: None
  Returns: None
  */
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var favColor = document.getElementById('favColor').value;

  // Get the value of the radio boxes.
  var male = document.getElementById('male');
  var female = document.getElementById('female');
  var other = document.getElementById('other');
  var genders = [male, female, other];

  // // Get the value of the check boxes.
  // Note: don't use but getting them just in case I want do something with them later after we learn more code
  var bike = document.getElementById('Bike');
  var car = document.getElementById('Car');
  var boat = document.getElementById('Boat');
  var vehicles = [bike, car, boat];

  // Other inputs test JS
  var myURL = document.getElementById("myURL") // ask dr. J why this isn't working!!!!!!!!!
  //window.open(myURL);  // get this working later with an iframe - couldn't get to work right now

  // JSON test code - not fully integrated yet, just trying it out
  myJSON = {
    "fname": fname,
    "lname": lname,
    "favColor": favColor,
    "male": male,
    "female": female,
    "other": other,
    "genders": genders,
    "bike": bike,
    "car": car,
    "boat": boat,
    "vehicles": vehicles,
    "myURL": myURL,
  }
  console.log(myJSON);

  console.log(JSON.stringify(myJSON));
  console.log(JSON.parse(JSON.stringify(myJSON)));


  // Display values

  // Display text box values
  if (myJSON['fname'] != "" & myJSON['lname'] != "") {
    myDiv.innerHTML = "Your name is " + myJSON['fname'] + " " + myJSON['lname'] + ". ";
  } else {
    myDiv.innerHTML = "Please enter your names again. We did not get all the data we needed.";
  }

  if (myJSON['favColor'] != "") {
    myDiv.innerHTML += "<br>Your favorite color is " + myJSON['favColor'] + ". ";
  } else {
    myDiv.innerHTML += "<br>Please enter your favorite color.";
  }


  // HERE AND BELOW NEED TO ADD THE JSON STUFF - JUST WANT TO TRY IT OUT ABOVE MORE


  // Display check boxes values
  for (i = 0; i < 3; i++) {
    if (myJSON['vehicles'][i].checked) {
      myDiv.innerHTML += "<br>You have a " + myJSON['vehicles'][i].checked + ". ";
    }
  }

  // Display Radio box values
  userGender = findRadioBox(genders);
  myDiv.innerHTML += "<br>You identify as " + userGender + ". ";


  // Check local storage and display data
  var oldLastName = localStorage.getItem("lastName");
  console.log(oldLastName);
  if (oldLastName != null ) {
    myDiv.innerHTML += "<br>Last time you answered your last name was " + oldLastName + ". ";
  }

  var oldJSON = localStorage.getItem(oldLastName);
  oldJSON.parse();
  if (oldJSON['vehicles'][i].checked) {
    myDiv.innerHTML += "<br>Last time you answered you said you had a bike.";
  } else {
    myDiv.innerHTML += "<br>Last time you answered you said you did not have a bike."
  }



  // Add last name to local storage
  if (lname != "") {
    localStorage.setItem("lastName", lname);
  }

  localStorage.setItem(myJSON['lname'], myJSON.stringify());

  // knowGender = false;
  // var i = 0;
  // while (knowGender == false && i < 3){
  //   if (genders[i].checked) {
  //    myDiv.innerHTML += "<br>You identify as " + genders[i].value + ". ";
  //    knowGender = true;
  //    i++;
  //    console.log(i);
  //    console.log(knowGender);
  //    console.log(here);
  //  }
  // }

}

// Main Section
// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);
