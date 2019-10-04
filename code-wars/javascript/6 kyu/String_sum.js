/*
Description:
Given a string s of uppercase letters, your task is to determine how many strings t (also uppercase) with length equal to that of s satisfy the followng conditions:

t is lexicographical larger than s, and
when you write both s and t in reverse order, t is still lexicographical larger than s.
For example:
solve('XYZ') = 5. They are: YYZ, ZYZ, XZZ, YZZ, ZZZ
String lengths are less than 5000. Return you answer modulo 10^9+7 (= 1000000007).
*/
function solve(s){
    let m = 1000000007;
    let pow26 = { 0 : 1 }
    
    for (let e = 1; e < s.length; e++){
      pow26[e] = (pow26[e-1] * 26) % m;
    }
    
    const dif = (e) =>  "Z".charCodeAt(0) - e.charCodeAt(0);
    
    let arr = [...s];
    let cnt = 0;
  
    for(let i=0; i<arr.length; i++){
      for(let j=i; j<arr.length; j++){
        let part = 0;
        if (i==j){
          part = dif(arr[i]);
        } else {
          part = dif(arr[i]) * dif(arr[j]) * pow26[(j-i-1)];
        }
        cnt = (cnt + part) % m;
      }
    }
    return cnt;
  }