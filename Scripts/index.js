import { masterSorter } from './Algorithms/SortingMaster.js';

let supportedSorting = ["merge","bubble","quick","selection"];
let selectedSort = "";





let generatorButton = document.getElementById("generator-button");
let inputSize = document.getElementById("input-size");
let sortButton = document.getElementById("sort-button");

render();

generatorButton.addEventListener("click", generateArray);

inputSize.addEventListener("input", render);

supportedSorting.forEach(element => {
  document.getElementById(element).addEventListener("click", unHideSortButton);
});

sortButton.addEventListener("click", startSorting);




 function render(){
  let newSize = parseInt(inputSize.value)+6;
  let barsContainer = document.getElementById("bar-container");
  barsContainer.innerHTML = "";
  let width = getWidth(newSize);
  for(let idx = 0;idx <  newSize;idx++){
      let bar = document.createElement("div");
      bar.className = "bar";
      bar.id = ""+idx;
      let height = generateRandom(10,600);
      bar.style.height = height+"px";
      bar.style.width = width+"px";
      barsContainer.append(bar);
  }  
}
 function generateArray(){
  inputSize.value = generateRandom(40,100);
  render();
}
function unHideSortButton(event){
  let sortElement = sortButton;
  sortElement.style.display = "block"
  for(let idx = 0;idx <  supportedSorting.length; idx++){
    let element = document.getElementById(supportedSorting[idx]);
    if(element.id == event.target.id){
      element.style.color = "rgb(236, 125, 125)";
    }
    else{
      element.style.color = "white";
    }
  }
  selectedSort = event.target.id;
}

async function startSorting(){
  disableAllElements();
  let elements = document.querySelectorAll(".bar");
  await masterSorter(elements,selectedSort);
  enableAllElements();
}
function disableAllElements(){
  disableAllButtonsAndChangeColor();
  disableInputBar();
  disableRandomGenerator();
}

function enableAllElements(){
  enableAllButtonsAndChangeColor();
  enableInputBar();
  enableRandomGenerator();
}


function enableRandomGenerator(){
  generatorButton.disabled = false;
  generatorButton.style.color = "white";
}
function enableInputBar(){
  let element = inputSize;
  element.disabled = false;
  element = document.getElementById("input-note");
  element.style.color = "white";
}
function enableAllButtonsAndChangeColor(){
  for(let idx = 0;idx < supportedSorting.length;idx++){
    let element = document.getElementById(supportedSorting[idx]); 
    element.disabled = false;
      element.style.color = "white";
  }
  sortButton.style.color = "white";
  sortButton.disabled = false;
}




function disableRandomGenerator(){
  generatorButton.disabled = true;
  generatorButton.style.color = "gray";
}
function disableInputBar(){
  let element = inputSize;
  element.disabled = true;
  element = document.getElementById("input-note");
  element.style.color = "gray";
}
function disableAllButtonsAndChangeColor(){
  for(let idx = 0;idx < supportedSorting.length;idx++){
    let element = document.getElementById(supportedSorting[idx]); 
    element.disabled = true;
    if(element.id != selectedSort){
      element.style.color = "gray";
    }
  }
  sortButton.style.color = "gray";
  sortButton.disabled = true;
}


function getWidth(newSize){
  let width = (generateRandom(500,600)/newSize);
  if(newSize > 50) return 5;
  return width;
}

function generateRandom(min, max ) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}
