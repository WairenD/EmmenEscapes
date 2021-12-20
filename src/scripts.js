var inventory = [];
var catRemoved = false;

$(document).ready(function() {
    let items = localStorage.getItem('inventory');
    items = items.split(',');
    for (let i = 0; i < items.length; i++) {
        inventory.push(items[i]);
    }
    console.log('inventory in loader: ', inventory);
});

function loadInventory() {
    $('#inventory').empty();
    let inventory = localStorage.getItem('inventory')
    console.log(inventory);

    if (inventory !== null && inventory !== undefined) {
        let items = inventory.split(',');
        let appendString = '';

        for (let i = items.length - 1; i >= 0; i--) {
            if (items[i] === 'paper') {
                let string = "<img onClick='paperPopup()' class='" + items[i] + " inventoryItem' src='../../assets/images/" + items[i] + ".png'>";
                appendString += string;
            } else {
                let string = "<img class='" + items[i] + " inventoryItem' src='../../assets/images/" + items[i] + ".png'>";
                appendString += string;
            }
        }

        $('#inventory').prepend(appendString);
    }
}

function paperPopup() {
    alert('The video tapes! They are located on the server, encrypted and unreachable.. \n ' +
        'unless you can find out what the password is.. I am being held hostage.. \n' +
        'the only hint that I managed to get out of them was the following, I know its two words but now what words \n \n' +
        'word 1: either a single 1 or 0 from many, or a painful jaw from the past, what am I?\n' +
        'word 2: I have a head and a tail but no body what am I?. ');
}

function addItem(item) {
    if (!inventory.includes(item) || inventory == null) {
        inventory.push(item);
        localStorage.setItem('inventory', inventory);
        loadInventory();
    }
}
window.onload = function loadInventory() {
    $('#inventory').empty();
    let inventory = localStorage.getItem('inventory')

    if (inventory !== null && inventory !== undefined) {
        let items = inventory.split(',');
        let appendString = '';

        for (let i = items.length - 1; i >= 0; i--) {
            if (items[i] === 'paper') {
                let string = "<img onClick='paperPopup()' class='" + items[i] + " inventoryItem' src='../../assets/images/" + items[i] + ".png'>";
                appendString += string;
            } else {
                let string = "<img class='" + items[i] + " inventoryItem' src='../../assets/images/" + items[i] + ".png'>";
                appendString += string;
            }
        }

        $('#inventory').prepend(appendString);
    }
}

function inventoryIndexOf(number) {
    inventory = localStorage.getItem('inventory');
    inventory = inventory.split(',');
    alert(inventory[number]);
}

function removeCat() {
    if (catRemoved == false) {
        document.getElementById('jojoSFX').style.opacity = "0";
        document.getElementById('cat').style.opacity = "0";
        catRemoved = true;
    } else {
        document.getElementById('jojoSFX').style.opacity = "1";
        document.getElementById('cat').style.opacity = "1";
        catRemoved = false;
    }
    localStorage.setItem('catRemoved', catRemoved);
}

function openBox() {
    if (catRemoved) {
        addItem('gasSuit');
    }
}

function goToGroundFloor() {
    if (sessionStorage.getItem('catRemoved')) {
        window.location.href = "./groundFloor.html";
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/gameStates/no cat/start-noCat-keys.png')";
    } else {
        window.location.href = "./groundFloor.html";
    }
}

function goToBottomFloor() {
    window.location.href = "./bottomFloor.html";
}

function goToTopFloor() {
    inventory = localStorage.getItem('inventory');
    if (inventory != null) {
        if (inventory.includes("gasSuit")) {
            window.location.href = "./topFloor.html";
        } else {
            alert("This room is filled with deadly toxins, maybe I shouldn't go in there!")
        }
    } else {
        alert("This room is filled with deadly toxins, maybe I shouldn't go in there!")
    }
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

function goToTopFloorBackRoom() {
    window.location.href = "./topFloorBackRoom.html";
}

function comparePasswords() {
    if (insertedPassword === password) {
        successSound.play();
        goToTopFloorBackRoom();
    } else {
        failSound.play();
        reset();
    }
}

function reset() {
    insertedPassword = "";
    buttonClickSound.play();
}

function swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
}

function shuffle() {
    //Use nested loops to access each cell of the 3x3 grid
    for (var row = 1; row <= 3; row++) { //For each row of the 3x3 grid
        for (var column = 1; column <= 3; column++) { //For each column in this row

            var row2 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
            var column2 = Math.floor(Math.random() * 3 + 1); //Pick a random column from 1 to 3

            swapTiles("cell" + row + column, "cell" + row2 + column2); //Swap the look & feel of both cells
        }
    }
}

function clickTile(row, column) {
    var cell = document.getElementById("cell" + row + column);
    var tile = cell.className;
    if (tile != "tile9") {
        //Checking if white tile on the right
        if (column < 3) {
            if (document.getElementById("cell" + row + (column + 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column + 1));
                return;
            }
        }
        //Checking if white tile on the left
        if (column > 1) {
            if (document.getElementById("cell" + row + (column - 1)).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + row + (column - 1));
                return;
            }
        }
        //Checking if white tile is above
        if (row > 1) {
            if (document.getElementById("cell" + (row - 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row - 1) + column);
                return;
            }
        }
        //Checking if white tile is below
        if (row < 3) {
            if (document.getElementById("cell" + (row + 1) + column).className == "tile9") {
                swapTiles("cell" + row + column, "cell" + (row + 1) + column);
                return;
            }
        }
    }

}

// Get the <span> element that closes the modal


// When the user clicks the button, open the modal
function openPopup(id) {
    if (id == "numberpad") {
        document.getElementById("numberpadContainer").style.display = "block";
        console.log("modal has been sucessfully opened");
    }

    if (id == "slider") {
        shuffle();
        document.getElementById("sliderContainer").style.display = "block";
        console.log("modal has been successfully opened");
    }
}

// When the user clicks on <span> (x), close the modal
function closethisshit(id) {
    if (id == "numberpad") {
        document.getElementById("numberpadContainer").style.display = "none";
    } else if (id == "slider") {
        document.getElementById("sliderContainer").style.display = "none";
    }
}



function passwordChecker() {
    var password = document.getElementById("psw");
    if (password.value == "bitcoin") {
        alert("YOU DID IT DADDY");
        console.log(psw);
    } else {
        alert("wrong password");
        console.log(psw);
    }
}

function openPasswordForm() {
    document.getElementById("myForm").style.display = "block";
}

function closePasswordForm() {
    document.getElementById("myForm").style.display = "none";
}

function goToGarage() {
    if (inventory.includes("skidoKeys")) {
        window.location.href = "./garage.html";
    } else {
        alert("This door seems locked!");
    }

}