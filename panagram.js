const isPanagram = (str) => {
    let strLowerCase = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for( i = 0; i < 26; i++ ){
        if( !strLowerCase.includes(alphabet[i]) ){
            return false
        }
    }
    return true
}

console.log(isPanagram("The quick brown fox jumps over the lazy dog!"))
console.log(isPanagram("I like cats, but not mice"))
//Code runtime O(1)
//Space Complexity = O(1)
