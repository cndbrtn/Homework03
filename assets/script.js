
// variables
var characters = "ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*?-";
var numbers = "1234567890";
var password = '';

var genBtn = document.getElementById("gen");
var textarea = document.querySelector("input");

//copy function called bellow by "click" listener

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

    // validate that the user has chosen at least one
 if (userSpecial === false && userNumber === false) {
            alert("You must include at least one option \nPlease refresh your browser");
        }
// if no valid selection alert the user to choose at least one and refresh and no further prompts

// if at least one valid input has been made continue here:

else {
    var userLength = prompt("Choose a password length between 8 - 128");
}
   

// if the user wants both special characters and numbers

    if (userSpecial === true && userNumber === true) {
        function specialNumAlpha() {
            var charSet = characters + numbers + special;

            for ( var i = 0; i < userLength; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }

            textarea.setAttribute("value", password);
            return password;
        }
        specialNumAlpha();

        console.log("Here's your password: " + specialNumAlpha());
    }
// if the user wants only numbers and letters

    else if (userSpecial === false && userNumber === true) {
        function alphaNum() {
            var charSet = characters + numbers;

            for ( var i = 0; i < userLength; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }

            textarea.setAttribute("value", password);
            return password;
        }
        alphaNum();

        console.log("Here's your password: " + alphaNum());
    }

// and the only other option is letters and special characters so that's an else

    else {
        function alphaSpec() {
            var charSet = characters + special;

            for ( var i = 0; i < userLength; i++) {
            password += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }

            textarea.setAttribute("value", password);
            return password;
        }
        alphaSpec();

        console.log("Here's your password: " + alphaSpec());
    }
}


genBtn.addEventListener("click", generatePassword);
document.querySelector("#copy").addEventListener("click", copy);
