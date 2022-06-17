import {sleep} from "../Sleep.js";
async function quickSorter(elements){
  let l = 0;
  let r = parseInt(elements.length) - 1;
  await quickSort(elements, l, r);

}

async function partitionLomuto(elements, l, r){
  let i = l - 1;
  elements[r].style.background = 'red';
  for(let j = l; j <= r - 1; j++){
      elements[j].style.background = 'yellow';
      await sleep(delay);

      if(parseInt(elements[j].style.height) < parseInt(elements[r].style.height)){
          i++;
          swap(elements[i], elements[j]);
          elements[i].style.background = 'orange';
          if(i != j) elements[j].style.background = 'orange';
          await sleep(delay);
      }
      else{
          elements[j].style.background = 'pink';
      }
  }
  i++; 
  await sleep(delay);
  swap(elements[i], elements[r]); 
  elements[r].style.background = 'pink';
  elements[i].style.background = 'rgb(236, 125, 125)';

  await sleep(delay);

  for(let k = 0; k < elements.length; k++){
      if(elements[k].style.background != 'rgb(236, 125, 125)')
          elements[k].style.background = 'aqua';
  }

  return i;
}
function swap(element1, element2) {
  
  let temp = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = temp;
  
}
async function quickSort(elements, l, r){
  if(l < r){
      let pivot_index = await partitionLomuto(elements, l, r);
      await quickSort(elements, l, pivot_index - 1);
      await quickSort(elements, pivot_index + 1, r);
  }
  else{
      if(l >= 0 && r >= 0 && l <elements.length && r <elements.length){
          elements[r].style.background = 'rgb(236, 125, 125)';
          elements[l].style.background = 'rgb(236, 125, 125)';
      }
  }
}



export {quickSorter};