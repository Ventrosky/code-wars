'''
Natural language texts often have a very high frequency of certain letters, in German for example, almost every 5th letter is an E, but only every 500th is a Q. It would then be clever to choose a very small representation for E. This is exactly what the Huffman compression is about, choosing the length of the representation based on the frequencies of the symbol in the text.

Algorithm
Let's assume we want to encode the word "aaaabcc", then we calculate the frequencies of the letters in the text:

Symbol	Frequency
a	4
b	1
c	2
Now we choose a smaller representation the more often it occurs, to minimize the overall space needed. The algorithm uses a tree for encoding and decoding:

  .
 / \
a   .
   / \
   b  c
Usually we choose 0 for the left branch and 1 for the right branch (but it might also be swapped). By traversing from the root to the symbol leaf, we want to encode, we get the matching representation. To decode a sequence of binary digits into a symbol, we start from the root and just follow the path in the same way, until we reach a symbol.

Considering the above tree, we would encode a with 0, b with 10 and c with 11. Therefore encoding "aaaabcc" will result in 0000101111.

(Note: As you can see the encoding is not optimal, since the code for b and c have same length, but that is topic of another data compression Kata.)

Tree construction
To build the tree, we turn each symbol into a leaf and sort them by their frequency. In every step, we remove 2 trees with the smallest frequency and put them under a node. This node gets reinserted and has the sum of the frequencies of both trees as new frequency. We are finished, when there is only 1 tree left.

(Hint: Maybe you can do it without sorting in every step?)

Goal
sWrite functions frequencies, encode and decode.

Note: Frequency lists with just one or less elements should get rejected. (Because then there is no information we could encode, but the length.)
'''
import collections, heapq

class Node:
	
    def __init__(self, weigth, symbol='', nextval=[]):
        self.weigth = weigth
        self.symbol = symbol
        self.code= ''
        self.nextval = nextval
    def __lt__(self, other):
        return self.weigth < other.weigth
    def __str__(self):
        return "('{}':{})".format(self.symbol,self.code)
    
    def add_code(self, code):
    	queue = collections.deque([self])
    	while queue:
    	    node = queue.pop()
    	    node.code = code+ node.code
    	    nextnodes = node.nextval
    	    if nextnodes:
    	    	for child in nextnodes:
    	    	    queue.append(child)
    
def code_table(graph):
    table = {}
    queue = collections.deque(graph)
    while queue:
        node = queue.pop()
        nextnodes = node.nextval
        if node.symbol != '':
            table[node.symbol] = node.code
        if nextnodes:
            for child in nextnodes:
                queue.append(child)
    return table
			
# takes: str; returns: [ (str, int) ] (Strings in return value are single characters)
def frequencies(s):
    return list(collections.Counter(s).items())

# takes: [ (str, int) ], str; returns: String (with "0" and "1")
def encode(freqs, s):
    if len(freqs) < 2:
        return None
    elif s == '':
        return ''
    try:
        table = code_table(tree_construct(freqs))
        return ''.join(map(lambda e: table[e], s))
    except:
        print("An exception occurred")
        return None
    
def tree_construct(freqs):
    node_heap = list(map(lambda t: Node(t[1],t[0]), freqs))
    heapq.heapify(node_heap)
    while len(node_heap) > 1:
        lt_node = heapq.heappop(node_heap)
        lt_node.add_code('0')
        rt_node = heapq.heappop(node_heap)
        rt_node.add_code('1')
        ct_node = Node(lt_node.weigth + rt_node.weigth,'',[lt_node,rt_node])
        heapq.heappush(node_heap,ct_node)
    return node_heap

# takes [ [str, int] ], str (with "0" and "1"); returns: str
def decode(freqs,bits):
    if len(freqs) < 2:
        return None
    elif bits == '':
        return ''
    tree = tree_construct(freqs)[0]
    print(tree)
    res = ""
    i = 0
    while(i<len(bits)):
        print(bits[i])
        curr = tree
        while(curr.nextval):
            curr = curr.nextval[0] if (bits[i] == '0') else curr.nextval[1]
            i += 1
        res += curr.symbol
    return res