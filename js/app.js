// Listen Password Length:
document.getElementById("myRange").onchange = function () {
    rangeSlider(this.value);
}

function rangeSlider(value) {
    document.querySelector(".progNumber").textContent = value;
}

// Add Event Listeners to CheckBoxes;
var upCheck = document.querySelector(".Upper");
var lowCheck = document.querySelector(".Lower");
var numCheck = document.querySelector(".Number");
var symCheck = document.querySelector(".Symbol");
var checkButtons = document.querySelectorAll(".myContainer input");

for (var j = 0; j < checkButtons.length; j++) {
    checkButtons[j].addEventListener("click", function() {
        catchStrength();
    })
}

function catchStrength() {
    var checkedQuantity = 0;
    var myCheckBox = [upCheck, lowCheck, numCheck, symCheck];

    for (var i = 0; i < myCheckBox.length; i++) {
        if (myCheckBox[i].checked == true) {
            checkedQuantity++;
        }
    }

    if (checkedQuantity == 4) {
        document.querySelector(".firstDiv").classList.add("yellowDiv");
        document.querySelector(".secondDiv").classList.add("yellowDiv");
        document.querySelector(".thirdDiv").classList.add("yellowDiv");
        document.querySelector(".fourthDiv").classList.add("yellowDiv");
        document.getElementById("myStrength").textContent = "PERFECT";
    }
    else if (checkedQuantity == 3) {
        document.querySelector(".firstDiv").classList.add("yellowDiv");
        document.querySelector(".secondDiv").classList.add("yellowDiv");
        document.querySelector(".thirdDiv").classList.add("yellowDiv");
        document.querySelector(".fourthDiv").classList.remove("yellowDiv");
        document.getElementById("myStrength").textContent = "STRONG";
    }
    else if (checkedQuantity == 2) {
        document.querySelector(".firstDiv").classList.add("yellowDiv");
        document.querySelector(".secondDiv").classList.add("yellowDiv");
        document.querySelector(".thirdDiv").classList.remove("yellowDiv");
        document.querySelector(".fourthDiv").classList.remove("yellowDiv");
        document.getElementById("myStrength").textContent = "MEDIUM";
    }
    else if (checkedQuantity == 1) {
        document.querySelector(".firstDiv").classList.add("yellowDiv");
        document.querySelector(".secondDiv").classList.remove("yellowDiv");
        document.querySelector(".thirdDiv").classList.remove("yellowDiv");
        document.querySelector(".fourthDiv").classList.remove("yellowDiv");
        document.getElementById("myStrength").textContent = "WEAK";
    }
    else {
        document.querySelector(".firstDiv").classList.remove("yellowDiv");
        document.querySelector(".secondDiv").classList.remove("yellowDiv");
        document.querySelector(".thirdDiv").classList.remove("yellowDiv");
        document.querySelector(".fourthDiv").classList.remove("yellowDiv");
        document.getElementById("myStrength").textContent = "";
    }
}

// Shuffle String Function:
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

// Proportionality Functions:
function proportion(chosenNumber, wholeLength) {
    var wantedNumber = parseInt(chosenNumber);
    var distribution = [];
    var randomNumber = 0;

    for (var a = 0; a < wantedNumber; a++) {
        distribution.push(Math.floor(parseInt(wholeLength) / wantedNumber));
    }
    randomNumber = Math.floor(Math.random() * wantedNumber);
    distribution[randomNumber] = Math.floor(parseInt(wholeLength) / wantedNumber) + parseInt(wholeLength) % wantedNumber;

    return distribution;
}


// Generate Password Section:
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = [];
for (var i = 0; i < lowerLetter.length; i++) {
    upperLetter.push(lowerLetter[i].toUpperCase());
}
var myNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var mySymbols = ["!", "@", "#", "$", "%", "&", "*", "?", "="];


document.querySelector(".myButton").addEventListener("click", function() {
    generatePassword();
})

function generatePassword() {
    var allLetter = [];
    var Division = null;
    var finalPassword = "";
    var passwordLength = parseInt(document.querySelector(".progNumber").textContent);
    var checkNumber = document.getElementsByClassName("yellowDiv");

    if (checkNumber.length == 4) {
        if (passwordLength >= 4) {
            allLetter = [upperLetter, lowerLetter, myNumbers, mySymbols];
            Division = proportion("4", passwordLength);
            // password:
            for (var i = 0; i < Division.length; i++) {
                for (var j = 0; j < Division[i]; j++) {
                    finalPassword += allLetter[i][Math.floor(Math.random() * allLetter[i].length)]
                }
            }
        }
        else {
            alert("Password Length Must Be 4 or More!")
        }
    }
    else if (checkNumber.length == 3) {
        if (passwordLength >= 3) {
            Division = proportion("3", passwordLength);
            if (upCheck.checked == true && lowCheck.checked == true && numCheck.checked == true) {
                allLetter = [upperLetter, lowerLetter, myNumbers];
            }
            else if (upCheck.checked == true && lowCheck.checked == true && symCheck.checked == true) {
                allLetter = [upperLetter, lowerLetter, mySymbols];
            }
            else if (upCheck.checked == true && numCheck.checked == true && symCheck.checked == true) {
                allLetter = [upperLetter, myNumbers, mySymbols];
            }
            else if (lowCheck.checked == true && numCheck.checked == true && symCheck.checked == true) {
                allLetter = [lowerLetter, myNumbers, mySymbols];
            }
            // password
            for (var i = 0; i < Division.length; i++) {
                for (var j = 0; j < Division[i]; j++) {
                    finalPassword += allLetter[i][Math.floor(Math.random() * allLetter[i].length)]
                }
            }
        }
        else {
            alert("Password Length Must Be 3 or More!")
        }
    }
    else if (checkNumber.length == 2) {
        if (passwordLength >= 2) {
            Division = proportion("2", passwordLength);
            if (upCheck.checked == true && lowCheck.checked == true) {
                allLetter = [upperLetter, lowerLetter];
            }
            else if (upCheck.checked == true && numCheck.checked == true) {
                allLetter = [upperLetter, myNumbers];
            }
            else if (upCheck.checked == true && symCheck.checked == true) {
                allLetter = [upperLetter, mySymbols];
            }
            else if (lowCheck.checked == true && numCheck.checked == true) {
                allLetter = [lowerLetter, myNumbers];
            }
            else if (lowCheck.checked == true && symCheck.checked == true) {
                allLetter = [lowerLetter, mySymbols];
            }
            else if (symCheck.checked == true && numCheck.checked == true) {
                allLetter = [mySymbols, myNumbers];
            }
            // password:
            for (var i = 0; i < Division.length; i++) {
                for (var j = 0; j < Division[i]; j++) {
                    finalPassword += allLetter[i][Math.floor(Math.random() * allLetter[i].length)]
                }
            }
        }
        else {
            alert("Pasword Length Must Be 2 or More!")
        }
    }
    else if (checkNumber.length == 1) {
        if (passwordLength >= 1) {
            if (upCheck.checked == true) {
                for (var i = 0; i < passwordLength; i++) {
                    finalPassword += upperLetter[Math.floor(Math.random() * upperLetter.length)]
                }
            }
            else if (lowCheck.checked == true) {
                for (var i = 0; i < passwordLength; i++) {
                    finalPassword += lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
                }
            }
            else if (numCheck.checked == true) {
                for (var i = 0; i < passwordLength; i++) {
                    finalPassword += myNumbers[Math.floor(Math.random() * myNumbers.length)]
                }
            }
            else if (symCheck.checked == true) {
                for (var i = 0; i < passwordLength; i++) {
                    finalPassword += mySymbols[Math.floor(Math.random() * mySymbols.length)]
                }
            }
        }
        else {
            alert("Password Length Must Be 1 or More!")
        }
    }
    var realPassword = finalPassword.shuffle();
    document.getElementById("passId").style.color = "white";
    document.getElementById("passId").textContent = realPassword;
}

// Copy To ClipBoard:
document.querySelector(".copyButton").addEventListener("click", function () {
    var copyText = document.getElementById("passId").textContent;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
})
