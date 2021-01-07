// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log(myDiv);

// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var favColor = document.getElementById('favColor').value;
  console.log(fname, lname, favColor);

  // Get the value of the radio boxes.
  var gender = document.getElementById('gender').value;
  console.log(gender);

  // Get the value of the check boxes.
  var vehicle1 = document.getElementById('vehicle1').value;
  var vehicle2 = document.getElementById('vehicle2').value;
  var vehicle3 = document.getElementById('vehicle3').value;
  console.log(vehicle1, vehicle2, vehicle3);

  // Do something with our input / information from the user.
  myDiv.innerHTML = "\n" + "Your Name is " + fname + " " + lname;
  myDiv.innerHTML += "\n" + "Your favorite color is " + favColor; // WHY ISN'T THE NEW LINE WORKING HERE!!!!!!!!!!!???????
  myDiv.innerHTML += "\n" + "You identify as " + gender; //WHY DOES THIS ALWAYS PUT THE GENDER AS MALE!!!!!!
  //myDiv.innerHTML += "\n" + "Your vehicles include: " + vehicle1 + ", " + vehicle2 + ", " vehicle3;
  // why does this cause an error????
  // how get value saying if these have been pressed or not????

  /* Example code that is helpful for reference from Dr. J

  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";

  // Now, using += we are *appending* to the new contents of the div tag.
  myDiv.innerHTML += "\t\t<h1>Whoa.</h1>\n"

  // Notice mixing of quotation marks, just like in Python.
  myDiv.innerHTML += "\t\t<img src='default.png' />\n";

  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";

  */
}
