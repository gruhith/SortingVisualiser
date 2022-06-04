
let inputElement = document.getElementById("input-size");
render()

function render(){
  let newSize = parseInt(inputElement.value)+6;
  let barsContainer = document.getElementById("bar-container");
  barsContainer.innerHTML = "";
  for(let idx = 0;idx <  newSize;idx++){
      let bar = document.createElement("div");
      bar.className = "bar";
      bar.id = ""+idx;
      bar.style.height = generateRandom(10,600)+"px";
      bar.style.width = getWidth(newSize)+"px";
      barsContainer.append(bar);
  }  
}
function generateArray(){
  inputElement.value = generateRandom(0,100);
  render();
}
function getWidth(newSize){
  let width = (generateRandom(100,600)/newSize);
  if(width > 5) return width;
  return 5;
}

function generateRandom(min, max ) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}
