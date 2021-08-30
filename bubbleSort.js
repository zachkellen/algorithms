function bubbleSort(arr){
    var unsorted = true;
    while (unsorted){
        unsorted = false;
        for(var i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                unsorted = true;
            }
        }
    }
    return arr;
}

var arr = [5,4,2,6,8,14,1,3]
console.log(arr)
console.log(bubbleSort(arr))