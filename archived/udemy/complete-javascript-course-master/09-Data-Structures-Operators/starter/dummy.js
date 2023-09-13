var longestSubsequence = function(arr, difference) {
    
    const set = new Set();
    
    for(let i = 0; i < arr.length - 1; i++) {

        const firstNum = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
                const secondNum = arr[j];
            if(secondNum - firstNum == difference){
                set.add(firstNum);
                set.add(secondNum);
                
            }
        }
    }
    console.log(set);
    if(!set.size) return 1;
    return set.size;
};

// const arr = [1, 2, 3, 4];
const arr = [3];
const difference = -2;

console.log((longestSubsequence(arr, difference)));