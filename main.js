// Global Variable 
let generatePinInput = document.getElementById('generatePinInput');
let matchingBox = document.getElementById('matchingBox');

// Showing Message
document.getElementById('openGate').style.display = "none";
document.getElementById('wrongPin').style.display = "none";
document.getElementById('generatePinMessage').style.display = "block";

// Function For Pin Generate
function generatePin(){
    let min = 1000, max = 9999;
    generatePinInput.value = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('generatePinMessage').style.display = "none";
}

// Function for taking Input Digit of Pin
function pushBtn(number){ 
    let pushedBtn = number.innerText;
    matchingBox.value += pushedBtn;
}

// function for checking the pin 
function submitPin(){
    if(generatePinInput.value !== "" && (generatePinInput.value === matchingBox.value)){
        document.getElementById('openGate').style.display = "block";
        document.getElementById('wrongPin').style.display = "none";
    }
    else{
        document.getElementById('wrongPin').style.display = "block";
        document.getElementById('openGate').style.display = "none";
        var triedNumber = document.getElementById('triedNumber').innerText;
        triedNumber = parseInt(triedNumber);
        // showing the number of try left(Extra for practice)
        if(triedNumber>0){
            triedNumber = triedNumber - 1;
            document.getElementById('triedNumber').innerText = triedNumber;
        }
    }
}

// event handler for clear all input (For Bonus)
document.getElementById('clearAll').addEventListener('click',function(){
    matchingBox.value = "";
})

// event handler for clear last digit of the input (For Bonus)
document.getElementById('backspace').addEventListener('click',function(){
    matchingBox.value = matchingBox.value.substring(0,matchingBox.value.length-1);
})