// Assignment code here
var passwordLength;
var passwords = [];
var lowerCaseAnswer = false;
var upperCaseAnswer = false;
var numericAnswer = false;
var specialChars = false;
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharsArray = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
// wasn't able to put ", \, 
var combinedArray = [];

function passwordLength(){
  passwordLength = prompt("How long of a password do you want?(Please provide an answer between 8 and 128)");
    while (passwordLength < 8 || passwordLength > 128){
      passwordLength = prompt("You must choose a password between 8 and 128 characters");
    }
}

function questions(){
  alert("Please let us know if you would like lower case letters, uppercase letters, numeric characters, and/or special characters. You must choose one of the options.");
  lowerCaseAnswer = window.confirm("Would you like lower case letters in your password? EX: yes/no");
  if(lowerCaseAnswer){
    lowerCaseAnswer = true;
  }else{
    lowerCaseAnswer = false;
  }
  upperCaseAnswer = window.confirm("Would you like upper case letters in your password? EX: yes/no");
  if(upperCaseAnswer){
    upperCaseAnswer = true;
  }else{
    upperCaseAnswer = false;
  }
  numericAnswer = window.confirm("Would you like numeric characters in your password? EX: yes/no");
  if(numericAnswer){
    numericAnswer = true;
  }else{
    numericAnswer = false;
  }
  specialChars = window.confirm("Would you like special characters in your password? EX: yes/no");
  if(specialChars){
    specialChars = true;
  }else{
    specialChars = false;
  }
}

function validateResponse(){
  while(lowerCaseAnswer == false && upperCaseAnswer == false && numericAnswer == false && specialChars == false){
    questions();
  }
}

function generatePassword(){
  passwordLength();
  questions();
  validateResponse();

  if(lowerCaseAnswer == true){
    combinedArray = combinedArray.concat(lowerCaseArray);
    console.log(combinedArray);
  }

  if(upperCaseAnswer == true){
    combinedArray = combinedArray.concat(upperCaseArray);
    console.log(combinedArray);
  }

  if(numericAnswer == true){
    combinedArray = combinedArray.concat(numericArray);
    console.log(combinedArray);
  }

  if(specialChars == true){
    combinedArray = combinedArray.concat(specialCharsArray);
    console.log(combinedArray);
  }
  
  for(var i = 0; i <= passwordLength; i++){
    var randomNumber = combinedArray[Math.floor(Math.random() * combinedArray.length)];
    passwords += randomNumber;
  }

  return passwords;

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
