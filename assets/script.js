
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
  
 // MAIN FUNCTION YO!!! This makes the car go when the "Generate Password" button is clicked
function generatePassword() {

 // ask user if they want to include special characters
 var userSpecial = confirm("Would you like your password to create special characters?");

 // ask the user if they want to include numbers
 var userNumber = confirm("Would you like your password to include numbers?");

 // ask the user if they want to include uppercase letters
 var userUCase = confirm("Would you like to include uppercase letters?");

 var userLCase = confirm("Would you like to include lowercase letters?")

 // variables for all the true/false options bc I didn't want to write out the whole thing every time
 var userUCaseTrue = userUCase === true;
 var userUCaseFalse = userUCase === false;
 var userLCaseTrue = userLCase === true;
 var userLCaseFalse = userLCase === false;
 var userSpecialTrue = userSpecial === true;
 var userSpecialFalse = userSpecial === false;
 var userNumberTrue = userNumber === true;
 var userNumberFalse = userNumber === false;

//  var userSelections = [userSpecial, userNumber, userUCase, userLCase]

    // validate that the user has chosen at least one
    // if no valid selection alert the user to choose at least one and refresh and no further prompts
 if (userSpecialFalse && userNumberFalse && userUCaseFalse && userLCaseFalse) {
            alert("You must include at least one option");
            return;
 }
 // if at least one valid input has been made continue here:
 else {
    var userLength = prompt("Enter a number from 8 - 128 to set the length of your password");
 }

 // verify their input is a number
 if (!isNumber(userLength)){
        alert("Please enter a number from 8 - 128");
        userLength = prompt("Enter a number from 8 - 128 to set the length of your password");
    }

 // verify the user has chosen a number between 8 - 128
 // alert if they have not
 if (userLength < 8 || userLength > 128) {
    alert("Please enter a number between 8 - 128");
 }

 // if they've chosen an appropriate number then continue with the function
 else {

    /* Ok there's gotta be a better way to oragnize and call all of this, I just haven't
       figured it out yet, but I'm sure there's gotta be some way to put user choices in
       an array and select from that array based on what's true and what's false, I don't know
       yet. */
        // special + numbers + uppercase + lowercase
        if (userSpecialTrue && userNumberTrue && userUCaseTrue && userLCaseTrue) {
            var charSet = special + numbers + uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }


        // numbers + uppercase + lowercase
        if (userSpecialFalse && userNumberTrue && userUCaseTrue && userLCaseTrue) {
            var charSet = numbers + uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

    
        // uppercase + lowercase
        if (userSpecialFalse && userNumberFalse && userUCaseTrue && userLCaseTrue) {
            var charSet = uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }


        // lowercase
        if (userSpecialFalse && userNumberFalse && userUCaseFalse && userLCaseTrue) {
            var charSet = lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }


        // special + uppercase + lowercase
        if (userSpecialTrue && userNumberFalse && userUCaseTrue && userLCaseTrue) {
            var charSet = special + uppercase + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

        
        // special + numbers + lowercase
        if (userSpecialTrue && userNumberTrue && userUCaseFalse && userLCaseTrue) {
            var charSet = special + numbers + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }


       // special + numbers + uppercase 
        if (userSpecialTrue && userNumberTrue && userUCaseTrue && userLCaseFalse) {
            var charSet = special + numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

        
       
        // special + numbers
        if (userSpecialTrue && userNumberTrue && userUCaseFalse && userLCaseFalse) {
            var charSet = special + numbers;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

        
    
        // special + lowercase
        if (userSpecialTrue && userNumberFalse && userUCaseFalse && userLCaseTrue) {
            var charSet = special + lowercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

           
        
        // special + uppercase
        if (userSpecialTrue && userNumberTrue && userUCaseTrue && userLCaseFalse) {
            var charSet = special + numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

           
        
        // special
        if (userSpecialTrue && userNumberFalse&& userUCaseFalse && userLCaseFalse) {
            var charSet = special;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

           
        
        
        // numbers + uppercase
        if (userSpecialFalse && userNumberTrue && userUCaseTrue && userLCaseFalse) {
            var charSet = numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }

           
        
        // numbers + lowercase
        if (userSpecialFalse && userNumberTrue && userUCaseFalse && userLCaseTrue) {
            var charSet = special + numbers + uppercase;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
        
    
        
        // numbers
        if (userSpecialFalse && userNumberTrue && userUCaseFalse && userLCaseFalse) {
            var charSet =  numbers;

            for ( var i = 0; i < userLength; i++) {
            password += charSet[Math.floor(Math.random() * charSet.length)];
            }

            textarea.textContent = password;
            console.log("Here's your password: " + password);
            return password;
        }
    }
}

// our even listeners for button clicks
genBtn.addEventListener("click", generatePassword);
document.querySelector("#copy").addEventListener("click", copy);

// here's our function for validating userLength is a number
function isNumber(value) {
    var numberPattern = /^[0-9]+$/; // one or more of digits 0 to 9
    return numberPattern.test(value);
}

// here's our function for copying to the clipboard
function copy() {
    var copyText = document.querySelector("#textarea");
    copyText.select();
    document.execCommand("copy");
    textarea.textContent = "Your Secure Password";
  }