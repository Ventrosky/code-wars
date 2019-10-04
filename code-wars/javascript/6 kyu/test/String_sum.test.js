const _ = require('lodash')

describe("Basic tests", function(){
Test.assertEquals(solve("XYZ"),5);
Test.assertEquals(solve("ABC"),16174);
Test.assertEquals(solve("ABCD"),402230);
Test.assertEquals(solve("ZAZ"),25);
Test.assertEquals(solve("XYZA"),34480)
});

describe("Random tests", function(){
for (var i = 0; i < 100; i++) {    
    var r = _.sampleSize("ABCDEGGHIJKLMNOPQRSTUVWXYZ",10).join("").repeat(_.random(10,500));    
    var exp = u76(r);
    Test.assertEquals(solve(r), exp);
  }
});

function u76(s){
    var n = s.length, dp = Array(n).fill(0), mod = 1000000007, sum = 0
    for (var i = n-2; i >= 0; i--)
        dp[i] = (((dp[i+1]*26) % mod) + ('Z'.charCodeAt(0) - s[i+1].charCodeAt(0))%mod)%mod;
    for (i = 0; i < n; i++) {
        sum += ((dp[i] + 1) * ('Z'.charCodeAt(0) - s[i].charCodeAt(0))) % mod;
        sum %= mod;
    }
    return sum;
}