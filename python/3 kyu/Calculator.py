'''
Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression

Example:

Calculator.evaluate("2 / 2 + 3 * 4 - 6") // => 7
Calculator.evaluate "2 / 2 + 3 * 4 - 6" // => 7.0

Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.
'''

from collections import deque

class Calculator(object):
    
    prec = {
        "*" : {"p":2,"f":lambda a,b: a * b},
        "/" : {"p":2,"f":lambda a,b: a / b},
        "+" : {"p":1,"f":lambda a,b: a + b},
        "-" : {"p":1,"f":lambda a,b: a - b},
    }
    def to_posfix(self, string):
        self.posfix = []
        self.stack = deque()
        for o in re.split('\s', string):
            if re.match(r'^[-+]?(\d+|\d+\.\d+)$',o):
                self.posfix.append(o)
            elif len(self.stack) > 0:
                while((len(self.stack) > 0 ) and (self.prec[self.stack[-1]]["p"] >= self.prec[o]["p"])):
                    self.posfix.append(self.stack.pop())
                self.stack.append(o)
            else:
                self.stack.append(o)
        while(len(self.stack) > 0):
            self.posfix.append(self.stack.pop())
        return self.posfix

    def evaluate(self, string):
        self.to_posfix(string)
        self.stack = deque()
        for o in self.posfix:
            if re.match(r'^[-+]?\d+|[-+]?\d+\.\d+$',o):
                self.stack.append(o)
            else:
                b = float(self.stack.pop())
                a = float(self.stack.pop())
                self.stack.append(self.prec[o]["f"](a,b))
        return float(self.stack.pop())