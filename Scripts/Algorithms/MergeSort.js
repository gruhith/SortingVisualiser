import {sleep} from "../Sleep.js";

async function mergeSorter(elements){
    let l = 0;
    let r = parseInt(elements.length) - 1;
    await mergeSort(elements, l, r);
}


async function mergeSort(elements, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(elements, l, m);
    await mergeSort(elements, m + 1, r);
    await merge(elements, l, m, r);
  }

async function merge(elements, low, mid, high){
  const n1 = mid - low + 1;
  const n2 = high - mid;
  let left = new Array(n1);
  let right = new Array(n2);

  for(let i = 0; i < n1; i++){
      await sleep(delay);

      elements[low + i].style.background = 'orange';
      left[i] = elements[low + i].style.height;
  }
  for(let i = 0; i < n2; i++){
      await sleep(delay);
      elements[mid + 1 + i].style.background = 'yellow';
      right[i] = elements[mid + 1 + i].style.height;
  }
  await sleep(delay);
  let i = 0, j = 0, k = low;
  while(i < n1 && j < n2){
      await sleep(delay);
      
      if(parseInt(left[i]) <= parseInt(right[j])){
          if((n1 + n2) === elements.length){
              elements[k].style.background = 'rgb(236, 125, 125)';
          }
          else{
              elements[k].style.background = 'lightgreen';
          }
          
          elements[k].style.height = left[i];
          i++;
          k++;
      }
      else{
          if((n1 + n2) === elements.length){
              elements[k].style.background = 'rgb(236, 125, 125)';
          }
          else{
              elements[k].style.background = 'lightgreen';
          } 
          elements[k].style.height = right[j];
          j++;
          k++;
      }
  }
  while(i < n1){
      await sleep(delay);
      if((n1 + n2) === elements.length){
          elements[k].style.background = 'rgb(236, 125, 125)';
      }
      else{
          elements[k].style.background = 'lightgreen';
      }
      elements[k].style.height = left[i];
      i++;
      k++;
  }
  while(j < n2){
      await sleep(delay);

      if((n1 + n2) === elements.length){
          elements[k].style.background = 'rgb(236, 125, 125)';
      }
      else{
          elements[k].style.background = 'lightgreen';
      }
      elements[k].style.height = right[j];
      j++;
      k++;
  }
}



export {mergeSorter};