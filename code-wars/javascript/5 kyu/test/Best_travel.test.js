Test.describe("chooseBestSum",function() {
  Test.it("Basic tests ",function() {        
    var ts = [50, 55, 56, 57, 58]
    Test.assertEquals(chooseBestSum(163, 3, ts), 163)
    ts = [50]
    Test.assertEquals(chooseBestSum(163, 3, ts), null)
    ts = [91, 74, 73, 85, 73, 81, 87]
    Test.assertEquals(chooseBestSum(230, 3, ts), 228)
    Test.assertEquals(chooseBestSum(331, 2, ts), 178)
    Test.assertEquals(chooseBestSum(331, 4, ts), 331)
    Test.assertEquals(chooseBestSum(331, 5, ts), null)
    Test.assertEquals(chooseBestSum(331, 1, ts), 91)
    Test.assertEquals(chooseBestSum(700, 6, ts), 491)
    var xs = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
    Test.assertEquals(chooseBestSum(230, 4, xs), 230)
    Test.assertEquals(chooseBestSum(430, 5, xs), 430)
    Test.assertEquals(chooseBestSum(430, 8, xs), null)
    Test.assertEquals(chooseBestSum(880, 8, xs), 876)
    Test.assertEquals(chooseBestSum(2430, 15, xs), 1287)
    Test.assertEquals(chooseBestSum(100, 2, xs), 100)
    Test.assertEquals(chooseBestSum(276, 3, xs), 276)
    Test.assertEquals(chooseBestSum(3760, 17, xs), 3654)
    Test.assertEquals(chooseBestSum(3760, 40, xs), null)
    Test.assertEquals(chooseBestSum(50, 1, xs), 50)
    Test.assertEquals(chooseBestSum(1000, 18, xs), null)
    xs = [100, 64, 123, 2333, 144, 50, 132, 123, 34, 89]
    Test.assertEquals(chooseBestSum(230, 4, xs), null)
    Test.assertEquals(chooseBestSum(230, 2, xs), 223)
    Test.assertEquals(chooseBestSum(2333, 1, xs), 2333)
    Test.assertEquals(chooseBestSum(2333, 8, xs), 825)
    xs = [1000, 640, 1230, 2333, 1440, 500, 1320, 1230, 340, 890, 732, 1346]
    Test.assertEquals(chooseBestSum(2300, 4, xs), 2212)
    Test.assertEquals(chooseBestSum(2300, 5, xs), null)
    Test.assertEquals(chooseBestSum(2332, 3, xs), 2326)
    Test.assertEquals(chooseBestSum(23331, 8, xs), 10789)
    Test.assertEquals(chooseBestSum(331, 2, xs), null)
})})
Test.describe("Random tests",function() {

    function randint(a,b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    function comb897(ls, k) {
        var i, sub1, res = [], subset, nxt;
        for(i = 0; i < ls.length; i++) {
            if(k === 1){
                res.push([ls[i]]);
            } else {
                subset = comb897(ls.slice(i+1, ls.length), k - 1);
                for(sub1 = 0; sub1 < subset.length; sub1++ ) {
                    nxt = subset[sub1];
                    nxt.unshift(ls[i]);
                    res.push(nxt);
                }
            }
        }
        return res;
    }
    function chooseBestSum897(t, k, ls) {
        var a = comb897(ls, k);
        var mx = -1;
        var res = [];
        for (var i = 0; i < a.length; i++) {
            var s = a[i].reduce(function(a, b) { return a + b; });
            if ((s >= mx) && (s <= t)) {
                res = [a[i], s];
                mx = s;
            }
        }
        return (res.length !== 0) ? res[1] : null;
    }
    for (var _ = 0; _ < 10; _++) {
        r = []
        l = randint(5, 15);
        for (var _ = 0; _ < l; _++) {
            n = randint(10, 500);
            r.push(n);
        }
        k = randint(50, 2000);
        p = randint(1, 4);
        Test.it("Testing: ", function() {
            Test.assertEquals(chooseBestSum(k, p, r), chooseBestSum897(k, p, r) ,"It should work for random tests too")
        }
    )}
})