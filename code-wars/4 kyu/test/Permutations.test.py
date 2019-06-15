Test.describe('Basic tests')
Test.it('unique letters')
Test.assert_equals(sorted(permutations('a')), ['a'])
Test.assert_equals(sorted(permutations('ab')), ['ab', 'ba'])
Test.assert_equals(sorted(permutations('abc')), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
    
abcd = ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca',
      'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba']
Test.assert_equals(sorted(permutations('abcd')), abcd)
Test.assert_equals(sorted(permutations('bcad')), abcd)
Test.assert_equals(sorted(permutations('dcba')), abcd)
Test.it('duplicate letters')
Test.assert_equals(sorted(permutations('aa')), ['aa'])
Test.assert_equals(sorted(permutations('aabb')), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'])
Test.assert_equals(sorted(permutations('aaaab')), ['aaaab', 'aaaba', 'aabaa', 'abaaa', 'baaaa'])
Test.assert_equals(sorted(permutations('aaaaab')), ['aaaaab', 'aaaaba', 'aaabaa', 'aabaaa', 'abaaaa', 'baaaaa'])

Test.describe("Random tests")
from random import randint
def permsol(string): from itertools import permutations as perm; return sorted(set(map(lambda x: "".join(x), perm(string))))
base="abcdefghijklmnopqrstuvwxyz"

for i in range(40):
    string="".join([base[randint(0,len(base)-1)] for i in range(randint(1,8))])
    Test.it("Testing for "+string)
    Test.assert_equals(sorted(permutations(string)),permsol(string),"It should work with random inputs too")