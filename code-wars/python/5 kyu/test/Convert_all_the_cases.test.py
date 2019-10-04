import re,string,random

Test.it("Basic tests")
Test.assert_equals(change_case("snakeCase", "snake"), "snake_case", "camelCase to snake_case conversion should work")    
Test.assert_equals(change_case("some-lisp-name", "camel"), "someLispName", "kebab-case to camelCase conversion should work")    
Test.assert_equals(change_case("map_to_all", "kebab"), "map-to-all", "snake_case to kebab-case conversion should work")    
Test.assert_equals(change_case("doHTMLRequest", "kebab"), "do-h-t-m-l-request", "camelCase to kebab-case conversion should work")    
Test.assert_equals(change_case("invalid-inPut_bad", "kebab"), None, "mIx-ed_cAse input should be considered invalid")    
Test.assert_equals(change_case("valid-input", "huh???"), None, "Invalid target cases should be dealt with")    
Test.assert_equals(change_case("", "camel"), "", "An empty string should not be changed.")

Test.it("More invalid inputs")  
Test.assert_equals(change_case("snake-kebab_case", "kebab"), None, "snake-kebab_case is invalid")
Test.assert_equals(change_case("snakeCamel_case", "snake"), None, "snakeCamel_case is invalid")
Test.assert_equals(change_case("kebabCamel-case", "snake"), None, "kebabCamel-case is invalid")
Test.assert_equals(change_case("case-Camel", "kebab"), None, "case-Camel is invalid")

  
Test.it("More valid inputs")
identifiers = [ ["littleShopOfHorrors", "little_shop_of_horrors", "little-shop-of-horrors"]
      , ["feFiFoFum", "fe_fi_fo_fum", "fe-fi-fo-fum"]
      , ["fooBarBaz", "foo_bar_baz", "foo-bar-baz"]
      , ["queSeraSera", "que_sera_sera", "que-sera-sera"]
      , ["fluxCapacitorsAreDangerous", "flux_capacitors_are_dangerous", "flux-capacitors-are-dangerous"]
      , ["putStrLn", "put_str_ln", "put-str-ln"]
      , ["caseConversionIsEasyForHumansAndComputers","case_conversion_is_easy_for_humans_and_computers","case-conversion-is-easy-for-humans-and-computers"]
      ]
case_names = ["camel", "snake", "kebab"];
    
for ids in identifiers:
  for i in [0,1,2]:
    for j in [0,1,2]:
      Test.assert_equals(change_case(ids[i], case_names[j]), ids[j], "Failed while converting '" + ids[i] + "' to '" + case_names[j] + "'")
      
def randyx():
    def ik98(st,target):    
        if st == '': return ''
        if '-' in st and '_' in st: return None
        if len(re.findall('[A-Z][^A-Z]*',st)) > 0:
            if '-' in st or '_' in st: return None
        if '-' in st: res = st.split("-")
        elif '_' in st: res = st.split("_")
        else: res = re.findall('[a-zA-Z][^A-Z]*',st)
        if target == 'snake':return ''.join(map(lambda x: x.lower(),[e for ts in zip(res,['_']*(len(res))) for e in ts][:-1]))
        elif target == 'camel': return res[0] + ''.join(map(lambda x: x.title(),res[1:]))
        elif target == 'kebab': return ''.join(map(lambda x: x.lower(),[e for ts in zip(res,['-']*(len(res))) for e in ts][:-1]))
        else: return None
    
    Test.it("Random tests")
    for i in range(50):
        startA, startB,kebabA = random.randrange(2,12), random.randrange(5,15),random.randrange(3,6)
        camel = string.ascii_lowercase[startA: startA + random.randrange(3,7)] + string.ascii_uppercase[startB: startB + random.randrange(3,7)] + string.ascii_uppercase[startA: startA + random.randrange(3,7)] + string.ascii_lowercase[startA-1: startA-1 + random.randrange(2,8)]
        kebabt,snaket = '', ''
        for k in range(0,kebabA):
            kebabt += string.ascii_lowercase[random.randrange(0,10): random.randrange(12,15)] 
            kebabt += '-'
            snaket += string.ascii_lowercase[random.randrange(0,10): random.randrange(12,15)] 
            snaket += '_'
        snaket, kebabt = snaket[:-1], kebabt[:-1]
        camel_rand = case_names[random.randrange(0,len(case_names))]
        kebab_rand = case_names[random.randrange(0,len(case_names))]
        snake_rand = case_names[random.randrange(0,len(case_names))]
        exp_from_camel = ik98(camel,camel_rand)
        exp_from_kebab = ik98(kebabt,kebab_rand)
        exp_from_snake = ik98(snaket,snake_rand)
        act_from_camel = change_case(camel, camel_rand)
        act_from_kebab = change_case(kebabt,kebab_rand)
        act_from_snake = change_case(snaket,snake_rand)
        Test.assert_equals(act_from_camel, exp_from_camel, "Expected: " + exp_from_camel + " Instead got: " + act_from_camel)
        Test.assert_equals(act_from_kebab, exp_from_kebab, "Expected: " + exp_from_kebab + " Instead got: " + act_from_kebab)
        Test.assert_equals(act_from_snake, exp_from_snake, "Expected: " + exp_from_snake + " Instead got: " + act_from_snake)
        
randyx()
