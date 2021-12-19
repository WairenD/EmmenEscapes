var inventory = [];
var catRemoved = false;
let txt = "";

function addItem(item){
  if(!inventory.includes(item) || inventory == null){
      inventory.push(item);
      sessionStorage.setItem('inventory', inventory);

      inventory.forEach(getInventory);
      document.getElementById("inventory").innerHTML = txt;
      txt = "";
  }
}
function inventoryIndexOf(number){
  inventory = sessionStorage.getItem('inventory');
  inventory = inventory.split(',');
  alert(inventory[number]);
}

function removeCat(){
  if(catRemoved==false){
    document.getElementById('imageContainer').style.backgroundImage ="url('../../../assets/images/house-no-cat.png')";
    document.getElementById('sfxJoJo').style.opacity = "0";
    catRemoved = true;
  }else{
    document.getElementById('imageContainer').style.backgroundImage ="url('../../../assets/images/house.png')";
    document.getElementById('sfxJoJo').style.opacity = "1";
    catRemoved = false;
  }
sessionStorage.setItem('catRemoved', catRemoved);
}
function openBox(){
  if(catRemoved){
    addItem('hazmatSuit');
  }
}
function goToGroundFloor(){
  console.log(sessionStorage.getItem('catRemoved'));
  if(sessionStorage.getItem('catRemoved')){
       window.location.href = "./groundFloor.html";
       document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/gameStates/no cat/start-noCat-keys.png')";
  }else{
       window.location.href = "./groundFloor.html";
       document.getElementById('imageContainer').style.backgroundImage = "url('../../../assets/gameStates/start-cat-keys.png')";
  }
}
function goToBottomFloor(){
   window.location.href = "./bottomFloor.html";
}
function goToTopFloor(){
  inventory = sessionStorage.getItem('inventory');
  if(inventory != null){
    if(inventory.includes("hazmatSuit")){
      window.location.href = "./topFloor.html";
    }else{
      alert("You gonna die bitch!")
    }
  }else{
    alert("You gonna die bitch!")
  }
}
function getInventory(value, index, array) {
  txt += value + " ";
}
