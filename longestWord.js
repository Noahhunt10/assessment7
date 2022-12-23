const findLongestWord = (arr) => {
   let wordLength = 0
    arr.forEach(ele => {
        if(ele.length > wordLength){
            wordLength = ele.length
        }
    })
    return wordLength
}

console.log(findLongestWord(['22', '333', '444', '333']))
console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(['1','22','4444','88888888','333','55555','999999999','7777777','666666']))
//Code runtime = O(n)
//Space Complexity = O(n)