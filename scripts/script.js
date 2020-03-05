$(document).ready(function(){
  console.log("waiting on button click..");
  var nameInput = document.getElementsByTagName("button"); 
  nameInput[0].onclick = function() {
     console.log("user has clicked button");
     console.log("calling function for getting input and creating a div")
     displayResults(getNameInput()); 
 };
  
})

// function getting name input from the user
function getNameInput() {
  console.log("creating text box for input")
  var nameToCount = document.getElementById("nameOfUser");
  console.log("saving user input as a var")
  console.log("returning user input so other function can see it")
  return nameToCount.value;
}

// function for calculating the bnumber of characters and displaying the greeting
function displayResults(name) {
  console.log("creating div to display number of letters in name and greeting")
  var output = document.createElement("div");
  console.log("appending text input to created div")
  output.innerHTML = "<p>You have this many numbers in your name:</p>" + name.length + "<p><br/></p>" + "Hello, " + name + ", How are you today?";
  console.log("appending created div to existing div for easier viewing on the page")
  var parent = document.getElementById("characterHolder");
  parent.appendChild(output);
}