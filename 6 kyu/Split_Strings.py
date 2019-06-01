'''
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
'''
import re

def solution(s):
    chunks = re.findall(r'.{1,2}',s)
    if chunks and len(chunks[-1]) == 1: 
        chunks[-1]=chunks[-1]+'_'
    return chunks