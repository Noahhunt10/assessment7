const hasUnique = (str) => {
    for( i = 0; i < str.length; i++ ){
        let letter = str[i]
        str = str.replace(letter, ' ')
        if(str.includes(letter)){
            return false
        }else{
            str.replace(' ', letter)
        }
        
    }
    return true
}

console.log(hasUnique('Moonday'))
console.log(hasUnique('monday'))
//Code runtime = O(n)
//Space Complexity = O(n)



const hasUniqueTwo = (str) => {
    j = 1
    i = 0
    while( i < str.length){
        if(str[i] === str[j] ){
            return false
        }
        else{
            j++
            i++
        }
   }
   return true
   
}
     
console.log(hasUniqueTwo('Moonday'))
console.log(hasUniqueTwo('monday'))
//Code runtime = O(n)
//Space Complexity = O(1)
