'''
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
Examples
to_camel_case("the-stealth-warrior") # returns "theStealthWarrior"
to_camel_case("The_Stealth_Warrior") # returns "TheStealthWarrior"
'''
import re

def to_camel_case(text):
    if text == "":
        return text
    return re.sub(r'[_-](\w)', lambda match: match.group(1).upper(), text)