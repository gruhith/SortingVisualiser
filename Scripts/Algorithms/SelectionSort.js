import {sleep} from "../Sleep.js";
async function selectionSorter(elements){
    for(let i = 0; i < elements.length; i++){
        let min_index = i;
        elements[i].style.background = 'orange';
        for(let j = i+1; j < elements.length; j++){
            elements[j].style.background = 'yellow';

            await sleep(delay);
            if(parseInt(elements[j].style.height) < parseInt(elements[min_index].style.height)){
                if(min_index !== i){
                    elements[min_index].style.background = 'aqua';
                }
                min_index = j;
            } 
            else{
                elements[j].style.background = 'aqua';
            }   
        }
        await sleep(delay);
        swap(elements[min_index], elements[i]);
        elements[min_index].style.background = 'aqua';
        elements[i].style.background = 'rgb(236, 125, 125)';
    }

}

function swap(element1, element2) {
  
  let temp = element1.style.height;
  element1.style.height = element2.style.height;
  element2.style.height = temp;
  
}

export {selectionSorter};
