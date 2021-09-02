//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    console.log(arr);
    const pivot = arr[0];
    let pivi = 0;

    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            //put number at the beginning
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(arr);
        }
    }

    console.log(arr);
    return pivi;
}

let newArr = [10,1,15,20, 8]
// console.log(partition(newArr))

const quickSort = (arr) => {
    console.log(arr);
    //partition the array
    let pivi = partition(arr);
    if(arr.length <= 2) return arr;
    
    //quicksort everything from left of pivot
    let leftHalf = quickSort(arr.slice(0,pivi));
    //quicksort everything from right of pivot
    let rightHalf = quickSort(arr.slice(pivi + 1));

    //return qs'd left half, pivot, qs'd right half
    return [...leftHalf, arr[pivi], ...rightHalf];
}

console.log(quickSort([7,45,2,67,3,2,1]));