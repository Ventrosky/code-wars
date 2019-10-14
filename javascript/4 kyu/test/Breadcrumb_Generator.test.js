Test.describe("Basic Tests",_=>{
    assertEquals(generateBC("mysite.com/pictures/holidays.html", " : "), '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>')
    assertEquals(generateBC("www.codewars.com/users/GiacomoSorbi?ref=CodeWars", " / "), '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>')
    assertEquals(generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * "), '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>')
    assertEquals(generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp", " > "), '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>')
    assertEquals(generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "), '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>')
    assertEquals(generateBC("https://www.linkedin.com/in/giacomosorbi", " * "), '<a href="/">HOME</a> * <a href="/in/">IN</a> * <span class="active">GIACOMOSORBI</span>')
    Test.it("The one used in the above test was my LinkedIn Profile; if you solved the kata this far and manage to get it, feel free to add me as a contact, message me about the language that you used and I will be glad to endorse you in that skill and possibly many others :)",_=>{})
    assertEquals(generateBC("www.agcpartners.co.uk/", " * "), '<span class="active">HOME</span>')
    assertEquals(generateBC("www.agcpartners.co.uk", " # "), '<span class="active">HOME</span>')
    assertEquals(generateBC("https://www.agcpartners.co.uk/index.html", " >>> "), '<span class="active">HOME</span>')
    assertEquals(generateBC("http://www.agcpartners.co.uk", " % "), '<span class="active">HOME</span>')
    })
    
    Test.describe("Random Tests",_=>{
    const randint=(a,b)=>Math.floor(Math.random()*(b-a+1)+a);
    function generateSol(url, separator) {
      //variable initialization
      url = url
            .replace(/https?:\/\//,"")
            .replace(/\/index\..+$/,"")
            .replace(/[?#].+$/,"");
      //extracting root
      var base = (url.match(/.+?\//) || [url])[0],
      //cutting the url part without the root
      paths = url.slice(base.length).split("/"),
      //initializing path
      path = "/",
      //initializing the bread crumb string
      breadcrumbedPath = ['<a href="/">HOME</a>'];
      if (url==base) return '<span class="active">HOME</span>';
      //looping through all the path elements
      var classes, last;
      for (var i = 0; i < paths.length; i++) {
          //if the element is the last of the path, it has to be active
          if (i==paths.length-1){
              classes='active';
              last=true;
          }
          path += paths[i] + "/";
          var bcName = paths[i];
          //adding acronymize to shorten long names
          if (paths[i].length>30){
              bcName=solacronymize(bcName);
          }
          bcName = parseName(bcName);
          breadcrumbedPath.push(createHTMLPath(bcName, path, classes, last));
      }
      return breadcrumbedPath.join(separator);
    }
    
    //support function to create valid HTML
    function createHTMLPath(bcName, url, classes, last){return !last ? ['<a href="',url,'"',(classes==undefined ? '' : [' class="',classes,'"'].join('')),'>',bcName,'</a>'].join('') : ['<span',(classes==undefined ? '' : [' class="',classes,'"'].join('')),'>',bcName,'</span>'].join('')}
    
    //support function to create valid HTML
    function parseName(bcName){
      bcName=bcName.split("-").join(" ")
          .replace(/\.\w+/,"")
          .toUpperCase();
      return bcName;
    }
    
    //support function to shorten long urls
    function solacronymize(bcName){
      //list of words not to be considered into the acronym
      exclude=["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]
      bcName=bcName.toLowerCase().split("-");
      res=[];
      for (var i=0;i<bcName.length;i++){
          if (exclude.indexOf(bcName[i])==-1) res.push(bcName[i]);
      }
      return res.map(a=>a[0]).join("");
    }
    separators=[" * ", " > ", " / ", " : ", " . ", " >>> ", " # ", " + ", " - ", " ; "]
    siteprefixes=["http://", "https://", "http://www.", "https://www.", "", "", "", ""]
    sites=["codewars.com", "google.ca", "facebook.fr", "linkedin.it", "github.com", "agcpartners.co.uk", "twitter.de", "pippi.pi"]
    paths=["pictures", "images", "profiles", "users", "pictures-you-wished-you-never-saw-but-you-cannot-unsee-now", "issues", "files", "games", "app", "wanted", "web", "most-downloaded", "most-viewed"]
    words=["the","of","in","from","by","with","and", "or", "for", "to", "at", "a", "bed", "uber", "cauterization", "pippi", "surfer", "insider", "kamehameha", "bladder", "skin", "transmutation", "meningitis", "paper", "research", "biotechnology", "bioengineering", "eurasian", "diplomatic", "immunity" ]
    documents=["index", "funny", "giacomo-sorbi", "login", "test", "secret-page"]
    extensions=[".html", ".htm", ".asp", ".php"]
    anchors=["#top","#bottom","#images","#info","#conclusion","#team","#people","#offers"]
    parameters=["?source=utm_pippi","?hack=off","?referral=CodeWars","?order=desc&filter=adult","?favourite=code","?previous=normalSearch&output=full","?rank=recent_first&hide=sold","?sortBy=year"]
    
    for (var i = 0; i < 40; i++){
      var sep=separators[randint(0,separators.length-1)],
      len = randint(0,4), url = [siteprefixes[randint(0,siteprefixes.length-1)] + sites[randint(0,sites.length-1)]];
      for (var j = 0;j < len; j++){
        if (randint(0,1)==0) url.push(paths[randint(0,paths.length-1)])
        else {
          var temp = [], pathlen = 0, lenlimit = randint(0,30) + 20;
          while (pathlen<lenlimit){
            n = randint(0,words.length-1)
            temp.push(words[n])
            pathlen+=words[n].length
          }
          url.push(temp.join("-"))
        }
      }
      if (randint(0,1)==0) url.push(documents[randint(0,documents.length-1)]+extensions[randint(0,extensions.length-1)])
      url=url.join("/");
      if (randint(1,10)>7) url+=anchors[randint(0,anchors.length-1)]
      if (randint(1,10)>7) url+=parameters[randint(0,parameters.length-1)]
      Test.it(`Testing for generateBC('${url}', '${sep}')`,_=>{
      assertEquals(generateBC(url, sep), generateSol(url, sep), "It should work for random inputs too")
      })
    }
})