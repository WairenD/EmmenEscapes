var inventory = [];
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



function getInventory(value, index, array) {
  txt += value + " ";
}
