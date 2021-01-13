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
  window.open(myURL);

  // Display values

  // Display text box values
  if (fname != "" & lname != "") {
    myDiv.innerHTML = "Your name is " + fname + " " + lname + ". ";
  } else {
    myDiv.innerHTML = "Please enter your names again. We did not get all the data we needed.";
  }

  if (favColor != "") {
    myDiv.innerHTML += "<br>Your favorite color is " + favColor + ". ";
  } else {
    myDiv.innerHTML += "<br>Please enter your favorite color.";
  }

  // Display check boxes values
  var vehicles = [bike, car, boat];
  for (i = 0; i < 3; i++) {
    if (vehicles[i].checked) {
      myDiv.innerHTML += "<br>You have a " + vehicles[i].value + ". ";
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

  // Add last name to local storage
  if (lname != "") {
    localStorage.setItem("lastName", lname);
  }



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
