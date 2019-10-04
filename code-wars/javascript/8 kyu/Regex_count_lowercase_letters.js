/* Your task is simply to count the total number of lowercase letters in a string.

Examples
```javascript lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3*/

function lowercaseCount(str){
    let n = str.match(/[a-z]/g)
    return (n ? n.length : 0);
}