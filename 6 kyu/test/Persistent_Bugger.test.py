from functools import reduce
from random import randint

#-----------------
def soluce(n):
        digits = [int(d) for d in str(n)]
        if (len(digits) == 1):
            return 0
        p = reduce(lambda x, y : x * y, digits, 1)
        return 1 + soluce(p)
#-----------------

Test.it("Basic tests")
Test.assert_equals(persistence(39), 3)
Test.assert_equals(persistence(4), 0)
Test.assert_equals(persistence(25), 2)
Test.assert_equals(persistence(999), 4)
Test.assert_equals(persistence(444), 3)

Test.describe("Random tests")
for _ in range(50):
    n = randint(1, 500000)
    Test.it("Testing for: " + str(n))  
    Test.assert_equals(persistence(n), soluce(n))