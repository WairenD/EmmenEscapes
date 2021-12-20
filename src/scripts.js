var inventory = [];
var catRemoved = false;
let txt = "";

function addItem(item) {
    if (!inventory.includes(item) || inventory == null) {
        inventory.push(item);
        sessionStorage.setItem('inventory', inventory);

        inventory.forEach(getInventory);
        document.getElementById("inventory").innerHTML = txt;
        txt = "";
    }
}

function inventoryIndexOf(number) {
    inventory = sessionStorage.getItem('inventory');
    inventory = inventory.split(',');
    alert(inventory[number]);
}

function removeCat() {
    if (catRemoved == false) {
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/images/house-no-cat.png')";
        document.getElementById('sfxJoJo').style.opacity = "0";
        catRemoved = true;
    } else {
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/images/house.png')";
        document.getElementById('sfxJoJo').style.opacity = "1";
        catRemoved = false;
    }
    sessionStorage.setItem('catRemoved', catRemoved);
}

function openBox() {
    if (catRemoved) {
        addItem('hazmatSuit');
    }
}

function goToGroundFloor() {
    console.log(sessionStorage.getItem('catRemoved'));
    if (sessionStorage.getItem('catRemoved')) {
        window.location.href = "./groundFloor.html";
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/gameStates/no cat/start-noCat-keys.png')";
    } else {
        window.location.href = "./groundFloor.html";
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/gameStates/start-cat-keys.png')";
    }
}

function goToBottomFloor() {
    window.location.href = "./bottomFloor.html";
}

function goToTopFloor() {
    inventory = sessionStorage.getItem('inventory');
    if (inventory != null) {
        if (inventory.includes("hazmatSuit")) {
            window.location.href = "./topFloor.html";
        } else {
            alert("You gonna die bitch!")
        }
    } else {
        alert("You gonna die bitch!")
    }
}

function getInventory(value, index, array) {
    txt += value + " ";
}

var password = "21706694";
var insertedPassword = "";
var buttonClickSound = new Audio('../../assets/audio/Select 1.wav');
var successSound = new Audio('../../assets/audio/Confirm 1.wav');
var failSound = new Audio('../../assets/audio/Hit damage 1.wav');

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
        reset();
        goToTopFloorBackRoom();
    }
}

function reset() {
    insertedPassword = "";
    buttonClickSound.play();
}


// Get the <span> element that closes the modal


// When the user clicks the button, open the modal 
function openBox() {
    document.getElementById("numberpadContainer").style.display = "block";
    console.log("modal has been sucessfully opened");
}

// When the user clicks on <span> (x), close the modal
function closethisshit() {
    document.getElementById("numberpadContainer").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById("numberpadContainer").style.display = "none";
    }
}