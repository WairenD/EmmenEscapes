var inventory = [];
var catRemoved = false;
let txt = "";

if()
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

}
function openBox(){
  if(catRemoved){
    addItem('hazmatSuit');
  }
}
function goToGroundFloor(){
  // TODO:
}
function getInventory(value, index, array) {
  txt += value + " ";
}
