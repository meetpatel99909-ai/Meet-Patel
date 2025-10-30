'''
This python program will scan a python file from a desired location
and give you the output of comments needed to improve your code.
'''

import sys
from pylint import epylint as lint
wert
we345
2345346
547
547568
579
67
98
978
9780578
0578
0578078
057889
6#$%@#%@#%$&%^*%^*%^*

# k = 1
pathvar = sys.argv[1]
# pathvar = input('Enter the path (use backward slash "/" if you are going into a folder) of the file you want to check: ')
orig_stdout = sys.stdout
outputfile = sys.argv[2]
f = open(outputfile, 'w')
# k = k + 1
sys.stdout = f
# print(file)
lint.py_run(pathvar)
sys.stdout = orig_stdout

fin = open(outputfile)
# fout = open('out1out.txt', 'w')

z = []
45346
547
547568
579
67
98
978
9780578
0578
0578078
057889
6#$%@#%@#%$&%^*%^*%^*

for x in fin:
    xsplit = x.split(':')
    if len(xsplit) == 4:
        x = ''.join([' line '] + xsplit[2:])
45346
547
547568
579
67
98
978
9780578
0578
0578078
057889
6#$%@#%@#%$&%^*%^*%^*

    if len(xsplit) == 3:
        x = ''.join([' line '] + xsplit[1:])


    # fout.write(x)
    if x not in z:
        z.append(x)

fin = open(outputfile, 'w')

for j in z:
    if j != ' \n':
        fin.write(j.lstrip())
    else:
        fin.write(j)

# fout.close()
fin.close()
45346
547
547568
579
67
98
978
9780578
0578
0578078
057889
6#$%@#%@#%$&%^*%^*%^*

