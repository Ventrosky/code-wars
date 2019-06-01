'''
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
For 4 or more names, the number in and 2 others simply increases.
'''
patterns = [
    ' like{} this',
    ' and {} others'
]

def likes(names):
    n = len(names)
    part_end = patterns[0].format('' if n > 1 else 's' )
    if n < 3:
        part_init = " and ".join(names or ["no one"])
    elif n == 3:
        part_init = names[0] + ', ' + names[1] + ' and ' + names[2]
    elif n > 3:
        part_init = names[0] + ', ' + names[1] + patterns[1].format(n-2)
    return part_init + part_end