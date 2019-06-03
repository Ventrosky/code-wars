from random import randint, shuffle

test.it("basic tests")
s = "aaaabcc"
fs = frequencies(s)
test.it('frequencies "{s}"')
test.assert_equals( sorted(fs), [ ("a",4), ("b",1), ("c",2) ] )
test.it('length encode "{s}"')
test.assert_equals( len(encode( fs, s )), 10 )
test.it('encode ""')
test.assert_equals( encode( fs, "" ), "" )
test.it('decode ""')
test.assert_equals( decode( fs, "" ), "" )

test.it("error handling")
test.assert_equals( encode( [], "" ), None );
test.assert_equals( decode( [], "" ), None );
test.assert_equals( encode( [('a', 1)], "" ), None );
test.assert_equals( decode( [('a', 1)], "" ), None );test.describe("random tests")

def random_char():
    return chr(randint(ord('a'), ord('z')))

def random_token(n):
    return ''.join([random_char() for x in range(1, n)])

def enum_from_to(start, end):
    return list(map(chr, range(ord(start), ord(end) + 1)))

test.it("identities")
for i in range(1, 100):
    s = random_token(i)
    fs = frequencies(s)
    print(s)
    enc = encode(fs, s)
    if len(fs) >= 2:
        test.expect(len(enc) >= len(s), "encoding length should be bigger than string length")
        test.assert_equals(decode(fs, enc), s, "encoding and decoding should return the original string")
    else:
        test.assert_equals(enc, None )

    test.assert_equals(
        [x for xs in [c * [v] for (v, c) in sorted(fs)] for x in xs],
        sorted(s),
        "restore sorted sequence from frequencies should succeed"
    )
    
test.describe("length property")
test.it("the higher frequencies are, the lower the length of their encoding should be (can also be equal for non-powers of 2)")
def signum(x):
    if x == 0:
        return 0
    elif x < 0:
        return -1
    else:
        return 1

def test_one_sided_tree_property():
    def random_subset(xs):
        return filter(lambda x: randint(0, 1), xs)

    amounts = [2]
    last = 2
    for i in range(1, 30):
        amounts.append(last)
        last *= 2

    for i in range(1, 40):
        fs = list(zip(random_subset(enum_from_to('a', 'z')), amounts))

        def enc_len(s):
            r = encode(fs, s)
            if r is None:
                return -1
            else:
                return len(r)

        for ((lc, lf), (rc, rf)) in zip(fs, fs[1:]):
            enc_len_diff = enc_len(lc) - enc_len(rc)
            freq_diff = lf - rf
            
            test.assert_equals(signum(enc_len_diff), signum(freq_diff) * -1)
    
test_one_sided_tree_property()  

test.it("for an alphabet with same frequencies and with size of 2^n all encodings should have the length n")
def equal_encoding_length_property():
    # A readable alphabet of length 2^6.
    chars = enum_from_to('a', 'z') + enum_from_to('A', 'Z') + enum_from_to('0', '9') + ['!', '?']
    
    for i in range(1, 100):
        n = randint(1, 6)
        
        xs = chars[:]
        shuffle(xs)
        xs = xs[:2 ** n]
        
        # count of each letter
        k = randint(1, 10)
        fs = list(map(lambda c: (c, k), xs))
        for c in xs:
            test.assert_equals(len(encode(fs, c)), n)

equal_encoding_length_property()

test.describe("error handling")
test.it("empty frequencies encode")
test.assert_equals( encode( [], "abc" ), None, "empty frequencies are not allowed")
test.assert_equals( encode( [], "" ), None, "empty frequencies are not allowed")

test.it("singleton frequency encode")
test.assert_equals( encode( [('a', 1)], "" ), None, "at least two different characters are needed for a huffman encoding")
test.assert_equals( encode( [('a', 1)], "a" ), None, "at least two different characters are needed for a huffman encoding")

test.it("empty frequencies decode")
test.assert_equals( decode( [], "" ), None, "empty frequencies are not allowed")
test.assert_equals( decode( [], "01" ), None, "empty frequencies are not allowed")

test.it("singleton frequency decode")
test.assert_equals( decode( [('a', 1)], "01" ), None, "at least two different characters are needed for a huffman encoding")
test.assert_equals( decode( [('a', 1)], "" ), None, "at least two different characters are needed for a huffman encoding")