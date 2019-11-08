
// variables
var uppercase = "ABDCEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = uppercase.toLowerCase();
var special = "!@#$%^&*?-";
var numbers = "1234567890";
var password = '';

var genBtn = document.querySelector("#gen");
var textarea = document.querySelector("#textarea");

//copy function called bellow by "click" listener
console.log("this is in lowercase: ", lowercase)
function copy() {
    var copyText = document.querySelector("#textarea");
    copyText.select();
    document.execCommand("copy");
  }
  
 // MAIN FUNCTION YO!!! This makes the car go when the "Generate Password" button is clicked
function generatePassword() {

 // ask user if they want to include special characters
 var userSpecial = confirm("Would you like your password to create special characters?");

 // ask the user if they want to include numbers
 var userNumber = confirm("Would you like your password to include numbers?");

 // ask the user if they want to include both upper and lowercase letters
 var userCase = confirm("Would you like to include uppercase letters?");

 // variables for all the true/false options bc I didn't want to write out the whole thing every time
 var userCaseTrue = userCase === true;
 var userCaseFalse = userCase === false;
 var userSpecialTrue = userSpecial === true;
 var userSpecialFalse = userSpecial === false;
 var userNumberTrue = userNumber === true;
 var userNumberFalse = userNumber === false;

    // validate that the user has chosen at least one
    // if no valid selection alert the user to choose at least one and refresh and no further prompts
 if (userSpecialFalse && userNumberFalse && userCaseFalse) {
            alert("You must include at least one option \nPlease refresh your browser");
 }

 // if at least one valid input has been made continue here:
 else {
    var userLength = prompt("Enter a number between 8 - 128 to set the length of your password");
 }

 // verify the user has chosen a number between 8 - 128
 // alert if they have not
 if (userLength < 8 || userLength > 128) {
    alert("Please refresh the page and choose a number between 8 - 128")
 }

 // if they've chosen an appropriate number then continue with the function
 else {

 // if the user wants special characters, numbers, and uppercase letters
    if (userSpecialTrue && userNumberTrue && userCaseTrue) {
        function alphaSpecNumCase() {
            var charSet = uppercase + lowercase + numbers + special;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            return password;
        }
        alphaSpecNumCase();

        console.log("Here's your password: " + alphaSpecNumCase());
    }

 // if the user wants only numbers and letters
    else if (userSpecialFalse && userNumberTrue && userCaseTrue) {
        function alphaNumCase() {
            var charSet = uppercase + lowercase + numbers;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            return password;
        }
        alphaNumCase();

        console.log("Here's your password: ", alphaNumCase());
    }

 // if the user selects only upper and lowercase letters
    else if (userSpecialFalse && userNumberFalse && userCaseTrue) {
        function alphaCase() {
            var charSet = uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            return password;
        }
        alphaCase();

        console.log("Here's your password: ", alphaCase());
    }
    
 // if the user selects lowercase, special characters, and numbers
    else if (userSpecialTrue && userNumberFalse && userCaseTrue) {
        function alphaSpecCase() {
            var charSet = lowercase + uppercase + special;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            return password;
        }
        alphaSpecCase();

        console.log("Here's your password: ", alphaSpecCase());
    }

 // if the user selects only lowercase letters and special characters
    else {
        function alphaSpec() {
            var charSet = lowercase + special;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            return password;
        }
        alphaSpec();

        console.log("Here's your password: ", alphaSpec());
    }
 }

}
genBtn.addEventListener("click", generatePassword);
document.querySelector("#copy").addEventListener("click", copy);
