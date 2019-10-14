/*
As breadcrumb menùs are quite popular today, I won't digress much on explaining them, leaving the wiki link to do all the dirty work in my place.

What might not be so trivial is instead to get a decent breadcrumb from your current url. For this kata, your purpose is to create a function that takes a url, strips the first part (labelling it always HOME) and then builds it making each element but the last a <a> element linking to the relevant path; last has to be a <span> element getting the active class.

All elements need to be turned to uppercase and separated by a separator, given as the second parameter of the function; the last element can terminate in some common extension like .html, .htm, .php or .asp; if the name of the last element is index.something, you treat it as if it wasn't there, sending users automatically to the upper level folder.

A few examples can be more helpful than thousands of words of explanation, so here you have them:

generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'
Seems easy enough?

Well, probably not so much, but we have one last extra rule: if one element (other than the root/home) is longer than 30 characters, you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); url will be always given in the format this-is-an-element-of-the-url and you should ignore words in this array while acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; a url composed of more words separated by - and equal or less than 30 characters long needs to be just uppercased with hyphens replaced by spaces.

Ignore anchors (www.url.com#lameAnchorExample) and parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

Examples:

generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
You will always be provided valid url to webpages in common formats, so you probably shouldn't bother validating them.
*/
const stop = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];

function generateBC(url, separator) {
  let _nobr = /^(?:https*:\/\/)?(?:www\.)?([\w-\.]+\.\w{2,3})(?:\/index)?(?:\.\w+)?(:?#\w+)?(?:\?[\w=_&]+)?$/
  let _re = /^(?:https*:\/\/)?(?:www\.)?([\w-\.]+\.\w{2,3})([\w-\.\/]+?)(?:\/index)?(?:\.\w+)?(:?#\w+)?(?:\?[\w=_&]+)?$/i;
  let match = _re.exec(url)
  if (!match || _nobr.exec(url)) return '<span class="active">HOME</span>';
  let clean = match[2]
  let parts = clean.split("/").filter(x => x);
  let last = parts.pop();
  if (!last) return '<span class="active">HOME</span>';
  const short = (s)=>{
    let w = (s||"");
    return w.length<=30 ? 
      w.replace(/-/g,' ').toUpperCase() : 
      w.split('-').filter(c => !stop.includes(c)).reduce((a,c)=> a+=c[0],'').toUpperCase();
  }

  let elems = parts.map((p,i) => {
    let path = parts.slice(0,i+1).join("/");
    return `${separator}<a href="/${path}/">${short(p)}</a>`;
  });
  
  return '<a href="/">HOME</a>' + elems.join('') + `${separator}<span class="active">${short(last)}</span>`;
}