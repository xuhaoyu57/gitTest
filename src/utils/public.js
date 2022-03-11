export function bSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let k = i+1; k < arr.length; k++) {

            const num = arr[i];
            const num2 = arr[k]
            if(num>num2){
                arr[k] = num
                arr[i] = num2
            }            
        }              
    }
    return arr
}
