"""
This program generates the .pylintrc file and places that in the
correct destination.
"""

# Uses Python3
&*()*(_++()+(_+++()+()+()+import pylint.lint as pl
import sys
import shutil
import os
&*()*(_++()+(_+++()+()+()+
# def addoptionstodisable():
codes = '\n\t\tC0103,C0326,C0304,C0301,C0305,C0302,C0321,C0330,C0303,C0412,C0410,C0415,C0414,C0413,C0113,C1801,C0200,C0401,C0402,C0403,' \
        '\n\t\tR0912,R0914,R0915,R1705,R1717,R1718,R1715,R1713,R1722,R1712,R1716,R1719,R1703,R1702,' \
        '\n\t\tW0105,W0120,W0107,W0122,W0125,' \
        '\n'

#dont end the list with a ',' (comma)
# print('Hello')
&*()*(_++()+(_+++()+()+()+
try:
    orig_stdout = sys.stdout
    f = open('.pylintrc', 'w+')
    pylint_opts = ['--generate-rcfile']
    sys.stdout = f
    pl.Run(pylint_opts)
    sys.stdout = orig_stdout
    f.close()

    # newpythonfile2.generatepylintrc()
except:
    pass

# for i in range(10):
#     sys.stdout.write("hello world\n")

# print('New hobby')
&*()*(_++()+(_+++()+()+()+
# print('COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL COOL')

with open('.pylintrc', 'r+') as f:
    lines = f.readlines()
    # q = 0
    for i, line in enumerate(lines):
        if line.startswith('disable'):
            # for x in codes:
            # print(line)
            # print('End')
            # q = 1
            lines[i] = lines[i].strip() + codes
            break
            # print(i, line)

    f.seek(0)

    for line in lines:
        # print('End')&*()*(_++()+(_+++()+()+()+
        f.write(line)
        # print('End')


shutil.copy2('.pylintrc', os.environ['USERPROFILE'])


