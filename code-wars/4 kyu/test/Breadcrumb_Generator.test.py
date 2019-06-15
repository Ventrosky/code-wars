Test.describe("Basic Tests")
assert_equals(generate_bc("mysite.com/pictures/holidays.html", " : "), '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>')
assert_equals(generate_bc("www.codewars.com/users/GiacomoSorbi?ref=CodeWars", " / "), '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>')
assert_equals(generate_bc("www.microsoft.com/important/confidential/docs/index.htm#top", " * "), '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>')
assert_equals(generate_bc("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "), '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>')
assert_equals(generate_bc("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "), '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>')
assert_equals(generate_bc("https://www.linkedin.com/in/giacomosorbi", " * "), '<a href="/">HOME</a> * <a href="/in/">IN</a> * <span class="active">GIACOMOSORBI</span>')
Test.it("The one used in the above test was my LinkedIn Profile; if you solved the kata this far and manage to get it, feel free to add me as a contact, message me about the language that you used and I will be glad to endorse you in that skill and possibly many others :)")
assert_equals(generate_bc("www.agcpartners.co.uk/", " * "), '<span class="active">HOME</span>')
assert_equals(generate_bc("www.agcpartners.co.uk", " # "), '<span class="active">HOME</span>')
assert_equals(generate_bc("https://www.agcpartners.co.uk/index.html", " >>> "), '<span class="active">HOME</span>')
assert_equals(generate_bc("http://www.agcpartners.co.uk", " % "), '<span class="active">HOME</span>')

Test.describe("Random Tests")
from random import randint
from re import sub, search

def generateSol(url, separator):
  url = sub("https?:\/\/","", sub("\/index\..+$","",sub("[?#].+$","", url)))
  base = search(".+?\/", url).group(0) if search(".+?\/", url) else url
  paths = url[len(base):].split("/")
  path = "/"
  breadcrumbedPath = ['<a href="/">HOME</a>']
  if (url==base): return '<span class="active">HOME</span>'
  classes = None; last = False
  for i in xrange(len(paths)):
      if i==len(paths)-1:
          classes='active'
          last=True
      path += paths[i] + "/"
      bcName = paths[i]
      if len(paths[i])>30: bcName=solacronymize(bcName)
      bcName = parseName(bcName)
      breadcrumbedPath+=[createHTMLPath(bcName, path, classes, last)]
  return separator.join(breadcrumbedPath);

createHTMLPath=lambda bcName, url, classes, last: ''.join(['<a href="',url,'"',('' if classes==None else ''.join([' class="',classes,'"'])),'>',bcName,'</a>']) if not last else ''.join(['<span',('' if classes==None else ''.join([' class="',classes,'"'])),'>',bcName,'</span>'])

parseName=lambda bcName: sub("\.\w+","", " ".join(bcName.split("-"))).upper()

solacronymize=lambda bcName: "".join([x[0] for x in bcName.lower().split("-") if x not in ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]])

separators=[" * ", " > ", " / ", " : ", " . ", " >>> ", " # ", " + ", " - ", " ; "]
siteprefixes=["http://", "https://", "http://www.", "https://www.", "", "", "", ""]
sites=["codewars.com", "google.ca", "facebook.fr", "linkedin.it", "github.com", "agcpartners.co.uk", "twitter.de", "pippi.pi"]
paths=["pictures", "images", "profiles", "users", "pictures-you-wished-you-never-saw-but-you-cannot-unsee-now", "issues", "files", "games", "app", "wanted", "web", "most-downloaded", "most-viewed"]
words=["the","of","in","from","by","with","and", "or", "for", "to", "at", "a", "bed", "uber", "cauterization", "pippi", "surfer", "insider", "kamehameha", "bladder", "skin", "transmutation", "meningitis", "paper", "research", "biotechnology", "bioengineering", "eurasian", "diplomatic", "immunity" ]
documents=["index", "funny", "giacomo-sorbi", "login", "test", "secret-page"]
extensions=[".html", ".htm", ".asp", ".php"]
anchors=["#top","#bottom","#images","#info","#conclusion","#team","#people","#offers"]
parameters=["?source=utm_pippi","?hack=off","?referral=CodeWars","?order=desc&filter=adult","?favourite=code","?previous=normalSearch&output=full","?rank=recent_first&hide=sold","?sortBy=year"]

for _ in xrange(40):
  sep=separators[randint(0,len(separators)-1)]
  url = [siteprefixes[randint(0,len(siteprefixes)-1)] + sites[randint(0,len(sites)-1)]]
  for j in xrange(randint(0,4)):
    if randint(0,1)==0: url+=[paths[randint(0,len(paths)-1)]]
    else:
      temp = []; pathlen = 0; lenlimit = randint(0,30) + 20;
      while pathlen<lenlimit:
        n = randint(0,len(words)-1)
        temp+=[words[n]]
        pathlen+=len(words[n])
      url+=["-".join(temp)]
  if (randint(0,1)==0): url+=[documents[randint(0,len(documents)-1)]+extensions[randint(0,len(extensions)-1)]]
  url="/".join(url)
  if (randint(1,10)>7): url+=anchors[randint(0,len(anchors)-1)]
  if (randint(1,10)>7): url+=parameters[randint(0,len(parameters)-1)]
  Test.it("Testing for generate_bc(%s, %s)" %(url,sep))
  assert_equals(generate_bc(url, sep), generateSol(url, sep), "It should work for random inputs too")