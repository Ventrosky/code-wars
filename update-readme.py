#!/usr/bin/python
import os, re

extens = re.compile("\b(js|clj|py)$")
folders = re.compile("^(clojure|javascript|python|sql|\d+ kyu)$")

baseReadme = """# CodeWars
[Code Wars](https://www.codewars.com/) - Kata solutions

## Kyu/Dan System
Each kata on the site is set to a Kyu/Dan rank, based on its subject area and difficulty.

[![ranks.png](https://raw.githubusercontent.com/Ventrosky/code-wars/master/ranks.PNG)](https://raw.githubusercontent.com/Ventrosky/code-wars/master/ranks.PNG)

"""

indexRdm = ""
for dirpath, dirs, files in os.walk("."):	 
	path = dirpath.split('\\')
	print(path)
	if os.path.basename(dirpath) in ["clojure","javascript", "python", "sql", "1 kyu", "2 kyu", "3 kyu", "4 kyu", "5 kyu", "6 kyu", "7 kyu", "8 kyu"]:
		indexRdm += '\n' + (len(path))*'#' + ' ' + os.path.basename(dirpath) + '\n'
		print(len(path)*'#', os.path.basename(dirpath))
		for f in files:
			print("* ", f)
			indexRdm += "* ["+ f + '](https://github.com/Ventrosky/code-wars/tree/master/'+'/'.join(path[1:]).replace(' ','%20')+'/'+f+')\n'
index = open('./README.md', "w")
index.write(baseReadme + indexRdm)