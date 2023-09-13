function bubbleSort(arr, i, j) {    
    // if(i === j) return;
    while(i < j) {
        if(arr[i] > arr[j]) {
            console.log(i);
            swap(i, j, arr);
        }
        i++;
    }
}

function swap(i, j, arr) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const arr = [5, 4, 3];

bubbleSort(arr, 0, arr.length);

// console.log(arr);