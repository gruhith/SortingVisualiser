//import { masterSorter } from './Algorithms/SortingMaster.js';

let inputElement = document.getElementById("input-size");
let supportedSorting = ["merge","bubble","quick","selection"];
let selectedSort = "";
render()

function render(){
  let newSize = parseInt(inputElement.value)+6;
  let barsContainer = document.getElementById("bar-container");
  barsContainer.innerHTML = "";
  let width = getWidth(newSize)+"px";
  for(let idx = 0;idx <  newSize;idx++){
      let bar = document.createElement("div");
      bar.className = "bar";
      bar.id = ""+idx;
      bar.style.height = generateRandom(10,600)+"px";
      bar.style.width = width;
      barsContainer.append(bar);
  }  
}
function generateArray(){
  inputElement.value = generateRandom(40,100);
  render();
}
function unHideSortButton(event){
  let sortElement = document.getElementById("sort-button");
  sortElement.style.display = "block"
  for(let idx = 0;idx <  supportedSorting.length; idx++){
    let element = document.getElementById(supportedSorting[idx]);
    if(element.id == event.id){
      element.style.color = "rgb(236, 125, 125)";
    }
    else{
      element.style.color = "white";
    }
  }
  selectedSort = event.id;
}

function startSorting(){
  disableAllElements();
  masterSorter();
}
function disableAllElements(){
  disableAllButtonsAndChangeColor();
  disableInputBar();
  disableRandomGenerator();
}
function disableRandomGenerator(){
  let element = document.getElementById("generator-button");
  element.disabled = true;
  element.style.color = "gray";
}
function disableInputBar(){
  let element = document.getElementById("input-size");
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
