from random import randint

def testrgb(*args):
  return "".join(hex(min(255,max(0,x)))[2:].zfill(2).upper() for x in args)

print "Basic tests:"

test.assert_equals(rgb(0,0,0),"000000", "testing zero values")
test.assert_equals(rgb(1,2,3),"010203", "testing near zero values")
test.assert_equals(rgb(255,255,255), "FFFFFF", "testing max values")
test.assert_equals(rgb(254,253,252), "FEFDFC", "testing near max values")
test.assert_equals(rgb(-20,275,125), "00FF7D", "testing out of range values")

print "Random tests:"

for i in range(5):
    r=randint(0,255)+(-1)**randint(1,2)*randint(0,255)
    g=randint(0,255)+(-1)**randint(1,2)*randint(0,255)
    b=randint(0,255)+(-1)**randint(1,2)*randint(0,255)
    test.assert_equals(rgb(r,g,b), testrgb(r,g,b), "Testing random values: "+" ,".join(map(str, [r,g,b])))