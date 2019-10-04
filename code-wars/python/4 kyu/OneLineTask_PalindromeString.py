'''
Your task is to generate a palindrome string, using the specified length n, the specified characters c(all characters in c must be used at least once), and the code length should less than: python 55 characters javascript 62 characters
'''
palindrome=lambda n,c:c+c[-1]*(n-len(c)*2+1)+c[-2::-1]