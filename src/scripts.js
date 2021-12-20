var inventory = [];
var catRemoved = false;


function addItem(item) {
    if (!inventory.includes(item) || inventory == null) {
        inventory.push(item);
        sessionStorage.setItem('inventory', inventory);
        var element = document.createElement('img');
        element.setAttribute("id", item);
        document.getElementById('inventory').appendChild(element);
        document.getElementById(item).src="../../assets/images/"+item+".png";
        document.getElementById(item).style.marginRight = "2rem";
        document.getElementById(item).style.marginTop = "2rem";
    }
}

function inventoryIndexOf(number) {
    inventory = sessionStorage.getItem('inventory');
    inventory = inventory.split(',');
    alert(inventory[number]);
}

<<<<<<< HEAD
function removeCat() {
    if (catRemoved == false) {
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/images/house-no-cat.png')";
        document.getElementById('sfxJoJo').style.opacity = "0";
        catRemoved = true;
    } else {
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/images/house.png')";
=======
function removeCat(){
    if(catRemoved==false){
        document.getElementById('imageContainer').style.backgroundImage ="url('../../assets/gameStates/no cat no keys/bottomFloor-noCat-noKeys.png')";
        document.getElementById('sfxJoJo').style.opacity = "0";
        catRemoved = true;
    }else{
        document.getElementById('imageContainer').style.backgroundImage ="url('../../assets/gameStates/no keys/bottomFloor-cat-noKeys.png')";
>>>>>>> c076515862b1f77cade2baf8cb4cce234789f6be
        document.getElementById('sfxJoJo').style.opacity = "1";
        catRemoved = false;
    }
    sessionStorage.setItem('catRemoved', catRemoved);
}
<<<<<<< HEAD

function openBox() {
    if (catRemoved) {
        addItem('hazmatSuit');
=======
function openBox(){
    if(catRemoved){
        addItem('gasSuit');
>>>>>>> c076515862b1f77cade2baf8cb4cce234789f6be
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
<<<<<<< HEAD

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
=======
function goToGarage(){
    window.location.href = "./garage.html";
}

>>>>>>> c076515862b1f77cade2baf8cb4cce234789f6be
