import random

def do():
    solution = lambda h, H, S: round((h * h + S * S)**0.5 * H / h, 4)
    
    Test.it("Fixed tests")
    Test.assert_equals(squirrel(4,16,3),20)
    Test.assert_equals(squirrel(4,4,3),5)
    Test.assert_equals(squirrel(8,9,37),42.5869)
    Test.assert_equals(squirrel(526,682,140),705.7435)
    Test.assert_equals(squirrel(247,857,669),2474.3392)
    Test.assert_equals(squirrel(2,11,47),258.7339)
    Test.assert_equals(squirrel(73,97,244),338.4185)
    Test.assert_equals(squirrel(15,774,948),48922.923)
    Test.assert_equals(squirrel(21,29,60),87.7856)
    Test.assert_equals(squirrel(83,97,86),139.6799)
    
    Test.it("Random tests")
    for i in range(100):
        a = random.randint(1, 1000)
        b = random.randint(a, 3000)
        c = random.randint(1, 1000)
        Test.assert_equals(squirrel(a, b, c), solution(a, b, c))

do()
