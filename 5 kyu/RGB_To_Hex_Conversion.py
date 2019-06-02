'''
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) # returns FFFFFF
rgb(255, 255, 300) # returns FFFFFF
rgb(0,0,0) # returns 000000
rgb(148, 0, 211) # returns 9400D3
'''
def rgb(r, g, b):
    limit_colors = map(lambda c : 255 if c > 255 else 0 if c < 0 else c,[r,g,b])
    to_hex = lambda n : hex(n)[2:].zfill(2).upper()
    return ''.join(map(to_hex, limit_colors))