'''
In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

py> change_case("snakeCase", "snake")
"snake_case"
py> change_case("some-lisp-name", "camel")
"someLispName"
py> change_case("map_to_all", "kebab")
"map-to-all"
py> change_case("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
py> change_case("invalid-inPut_bad", "kebab")
None
py> change_case("valid-input", "huh???")
None
py> change_case("", "camel")
""
Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.
'''
import re

def change_case(identifier, targetCase):
    if identifier == '':
        return identifier
    all_cases = {
        'snake' : (r'^([a-z]+_{,1})+$',  '_'),
        'camel' : (r'^([a-z]+[A-Z]*)+$', ''),
        'kebab' : (r'^([a-z]-{,1})+$', '-')
    }
    if targetCase not in all_cases.keys():
        return None
    for name, tuple in all_cases.items():
        re_check, source_prefix = tuple
        if re.search(re_check, identifier):
            if name == targetCase:
                return identifier
            target_pre = all_cases[targetCase][1]
            if name == 'camel':
                return re.sub(r'([A-Z])', lambda x: target_pre+x.group(1).lower(), identifier)
            elif targetCase == 'camel':
                return re.sub(r'[\-\_]([a-z])', lambda x: target_pre+x.group(1).upper(), identifier)
            return re.sub(r'([-_])',target_pre, identifier)
    return None