import { sleep } from "../Sleep.js";

async function bubbleSorter(elements){
     
  for(let i = 0; i < elements.length; i++){
      
    for(let j = 0; j < ( elements.length - i -1 ); j++){
      elements[j].style.background = 'orange';
      elements[j+1].style.background = 'yellow';
       
      await sleep(delay);

      
      if(parseInt(elements[j].style.height) > parseInt(elements[j+1].style.height)){
          
        let temp = elements[j].style.height;
        elements[j].style.height = elements[j+1].style.height;
        elements[j+1].style.height = temp;

      }
      elements[j].style.background = 'aqua';
      elements[j+1].style.background = 'aqua';

    }
    elements[elements.length-1-i].style.background = 'rgb(236, 125, 125)';
  }

  console.log(elements);
 }

 export {bubbleSorter};