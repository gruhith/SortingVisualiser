import { mergeSorter } from './MergeSort.js';
import { bubbleSorter } from './BubbleSort.js';
import { quickSorter } from './QuickSort.js';
import { selectionSorter} from './SelectionSort.js';


async function masterSorter(elements,sortingType){
    if(sortingType == "merge") return await mergeSorter(elements);
    if(sortingType == "bubble") return await bubbleSorter(elements);
    if(sortingType == "quick") return await quickSorter(elements);
    if(sortingType == "selection") return await selectionSorter(elements);
    
    
}

export {masterSorter};


