import { mergeSorter } from './MergeSort.js';

async function masterSorter(elements,sortingType){
    if(sortingType == "merge") await mergeSorter(elements);
    console.log(delay);
}

export {masterSorter};


