var password = "21706694";
var insertedPassword = "";
var buttonClickSound = new Audio('../../../assets/audio/Select 1.wav');
var successSound = new Audio('../../../assets/audio/Confirm 1.wav');
var failSound = new Audio('../../../assets/audio/Hit damage 1.wav');

function buttonClick(button) {
    buttonClickSound.play();

    insertedPassword += button;
    console.log(insertedPassword);
}

function enter() {
    console.log(insertedPassword);
    comparePasswords();
}

function comparePasswords() {
    if (insertedPassword === password) {
        successSound.play();

    } else {
        failSound.play();
        reset;
    }
}

function reset() {
    insertedPassword = "";
    buttonClickSound.play();
}