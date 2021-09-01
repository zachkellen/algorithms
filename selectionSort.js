function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let mindex = i;
        for(let j = i; j < arr.length; j++){
            if(arr[mindex] > arr[j]){
                mindex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[mindex];
        arr[mindex] = temp;
    }
    return arr;
}

console.log(selectionSort([3,6,8,4,9,5,1,2,6,7,9]));

