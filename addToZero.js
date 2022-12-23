const addToZero = (arr) => {
    for( i = 0; i < arr.length; i++ ){
        for( j = 1; j < arr.length; j++ ){
            if( arr[i] + arr[j] === 0){
                return true
            }
           
        }
    }
    return false
}
console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1,2,3]))
console.log(addToZero([1,2,3,-2]))
//Code runtime = O(n^2)
//Space Complexity = O(n)