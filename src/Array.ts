type NumberArray=number[];
function MaximumValue(arr:NumberArray){
    let max =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let arr = [1, 2, 3, 4, 5];
console.log("The maximum value is "+MaximumValue(arr));