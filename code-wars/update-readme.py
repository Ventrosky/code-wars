#!/usr/bin/python
import os, re

extens = re.compile("\b(js|clj|py)$")

baseReadme = """# CodeWars
[Code Wars](https://www.codewars.com/) - Kata solutions

## Kyu/Dan System
Each kata on the site is set to a Kyu/Dan rank, based on its subject area and difficulty.

[![ranks.png](https://raw.githubusercontent.com/Ventrosky/coding-challenges/master/code-wars/ranks.PNG)](https://raw.githubusercontent.com/Ventrosky/coding-challenges/code-wars/master/ranks.PNG)

## Index
"""

indexRdm = ""
for dirpath, dirs, files in os.walk("."):	 
	path = dirpath.split('\\')
	print(path)
	if os.path.basename(dirpath) not in ["test","."]:
		indexRdm += '\n' + (len(path)+1)*'#' + os.path.basename(dirpath) + '\n'
		print(len(path)*'#', os.path.basename(dirpath))
		for f in files:
			print("* ", f)
			indexRdm += "* ["+ f + '](https://github.com/Ventrosky/coding-challenges/tree/master/code-wars/'+'/'.join(path[1:]).replace(' ','%20')+'/'+f+')\n'
index = open('./README.md', "w")
index.write(baseReadme + indexRdm)