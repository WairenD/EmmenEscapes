var inventory = [];
var catRemoved = false;


function addItem(item) {
    if (!inventory.includes(item) || inventory == null) {
        inventory.push(item);
        localStorage.setItem('inventory', inventory);
        var element = document.createElement('img');
        element.setAttribute("id", item);
        document.getElementById('inventory').appendChild(element);
        document.getElementById(item).src = "../../assets/images/" + item + ".png";
        document.getElementById(item).style.marginRight = "2rem";
        document.getElementById(item).style.marginTop = "2rem";
    }
}
window.onload = function loadInventory(){
  console.log(localStorage.getItem(inventory));
  if(localStorage.getItem(inventory) != null){
    inventory =  localStorage.getItem(inventory);
    inventory.forEach(item => {
      var element = document.createElement('img');
      element.setAttribute("id", item);
      document.getElementById('inventory').appendChild(element);
      document.getElementById(item).src="../../assets/images/"+item+".png";
      document.getElementById(item).style.marginRight = "2rem";
      document.getElementById(item).style.marginTop = "2rem";
    });
  }
}
function inventoryIndexOf(number){
    inventory = localStorage.getItem('inventory');
    inventory = inventory.split(',');
    alert(inventory[number]);
}

function removeCat(){
    if(catRemoved==false){
        document.getElementById('jojoSFX').style.opacity = "0";
        document.getElementById('cat').style.opacity = "0";
        catRemoved = true;
    }else{
        document.getElementById('jojoSFX').style.opacity = "1";
        document.getElementById('cat').style.opacity = "1";
        catRemoved = false;
    }
    localStorage.setItem('catRemoved', catRemoved);
}
function openBox(){
    if(catRemoved){
        addItem('gasSuit');
    }
}

function goToGroundFloor() {
    console.log(sessionStorage.getItem('catRemoved'));
    if (sessionStorage.getItem('catRemoved')) {
        window.location.href = "./groundFloor.html";
        document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/gameStates/no cat/start-noCat-keys.png')";
    } else {
        window.location.href = "./groundFloor.html";
    }
}

function goToBottomFloor(){
    window.location.href = "./bottomFloor.html";
}
function goToTopFloor(){
    inventory = localStorage.getItem('inventory');
    if(inventory != null){
        if(inventory.includes("gasSuit")){
            window.location.href = "./topFloor.html";
        } else {
            alert("You gonna die bitch!")
        }
    } else {
        alert("You gonna die bitch!")
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

function goToGarage(){
    window.location.href = "./garage.html";
}
