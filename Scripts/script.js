import { masterSorter } from './Algorithms/SortingMaster.js';

let supportedSorting = ["merge","bubble","quick","selection"];
let selectedSort = "";
let heights = [];


let generator_button = document.getElementById("generator-button");
let input_range = document.getElementById("input-size");
let sort_button = document.getElementById("sort-button");

render();

generator_button.addEventListener("click", generateArray);
input_range.addEventListener("input", render);
supportedSorting.forEach(element => {
  document.getElementById(element).addEventListener("click", unHideSortButton);
});
sort_button.addEventListener("click", startSorting);



 function render(){
  let newSize = parseInt(input_range.value)+6;
  let barsContainer = document.getElementById("bar-container");
  barsContainer.innerHTML = "";
  let width = getWidth(newSize)+"px";
  heights = [];
  for(let idx = 0;idx <  newSize;idx++){
      let bar = document.createElement("div");
      bar.className = "bar";
      bar.id = ""+idx;
      let height = generateRandom(10,600);
      bar.style.height = height+"px";
      heights.push(height);
      bar.style.width = width;
      barsContainer.append(bar);
  }  
}
 function generateArray(){
  input_range.value = generateRandom(40,100);
  render();
}
function unHideSortButton(event){
  let sortElement = sort_button;
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

function startSorting(){
  disableAllElements();
  masterSorter(selectedSort);
}
function disableAllElements(){
  disableAllButtonsAndChangeColor();
  disableInputBar();
  disableRandomGenerator();
}
function disableRandomGenerator(){
  generator_button.disabled = true;
  generator_button.style.color = "gray";
}
function disableInputBar(){
  let element = input_range;
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
  sort_button.style.color = "gray";
  sort_button.disabled = true;
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
