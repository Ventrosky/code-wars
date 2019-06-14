""" You can assume that the specified length n will always 
    be a positive integer and greater than 2*len(c) - 2.
    
    The function 'makeAssertion(length, strng, result)' do the following:
        1) print the parameters and your result
        2) check that your result is a palindrome with the specified length
        3) check that you use all the characters in strng and only those ones
"""


Test.describe("Special tests for cheaters...")

import re

verif_MAX_CHARS = 55
verif_MIN_CHEAT = 20
PROTOTYPE = 'palindrome='    # not used (for now...)

with open('/home/codewarrior/solution.txt', 'r') as file:
    verif_solution = file.read()

Test.assert_equals(MAX_CHARS, verif_MAX_CHARS, "Cheater!! Do not override the parameters of the kata... :p")
Test.assert_equals(MIN_CHEAT, verif_MIN_CHEAT, "Cheater!! Do not override the parameters of the kata... :p")
Test.assert_equals(str(verif_solution),  str(solution),  "Cheater!! Do not override the parameters of the kata... :p")
Test.assert_equals("makeAssertion" in solution, False ,   "Nice try ! But I thought about that before you... ;) => https://www.codewars.com/kata/reviews/58fa38996d333b8e0b000c70/groups/58fa40a39e286f38820002c0" )
Test.assert_equals(verif_solution,  preserveSolution,     "Ooooh, you should be ashame of trying things like that, my dear... ;p")
Test.assert_equals(bool(re.search(r'len *=|def len',solution)), False ,   "Nice try ! But some thought of that before you... ;) => https://www.codewars.com/kata/reviews/58fa38996d333b8e0b000c70/groups/58fa4b196d333b67d0001282" )


Test.describe("Restictions tests")
Test.expect(checkForbiddenChars('\r\n;', solution), "Your solution has to be a pure oneliner")
Test.expect(len(solution) <= MAX_CHARS, "Solution is too long !")
Test.expect(len(solution) >  MIN_CHEAT, "Your code length is smaller than the human being limit, so I guess you are Superman, or you are a cheater.;-)")
# Test.assert_equals(solution[:len(PROTOTYPE)], PROTOTYPE, "Do not modify the prototype !")    # useless if the prototype is only "palindorme=0"


Test.describe("Basic tests")
length,strng = 3,  "ab";     makeAssertion(length, strng, palindrome(length, strng))

Test.it("More basic tests...")
length       = 10;           makeAssertion(length, strng, palindrome(length, strng))
length,strng = 20, "abcd";   makeAssertion(length, strng, palindrome(length, strng))
length,strng = 1,  "a";      makeAssertion(length, strng, palindrome(length, strng))
length,strng = 51, "abcdefghijklmnopqrstuvwxyz";   makeAssertion(length, strng, palindrome(length, strng))




from random import randint
import string
baseChars = string.ascii_letters + "0123456789"

Test.describe("100 Random tests")
Test.it("It should work for random tests too")
for _ in range(100):
    lenS = randint(1,20)
    n = 2*lenS-1 + randint(1,60)
    s = ''.join( baseChars[randint(0,len(baseChars)-1)] for _2 in range(lenS) )
    result = palindrome(n, s)
    makeAssertion(n, s, result)