import { mergeSorter } from './MergeSort.js';
import { bubbleSorter } from './BubbleSort.js';

async function masterSorter(elements,sortingType){
    if(sortingType == "merge") return await mergeSorter(elements);
    if(sortingType == "bubble") return await bubbleSorter(elements);
    
    
}

export {masterSorter};


