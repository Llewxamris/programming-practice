#!/bin/python
"""
Title: The DISEMVOWLER
Author: Maxwell Haley
Description: Takes in a line of text from stdin, strips it of all vowles,
then prints the mangled text and it's vowel remains. Done for
/r/DailyProgrammer challenge #149.

You can invoke this script in two ways. First, call the script with no arguments
and enter in a string. Everything until a newline will be processed.

Second, pipe text from another program to this script.

`echo 'This is a sentace' | ./disemvowler.py`
`cat text1.txt | ./disemvowler.py`
"""
import sys

targets = ('a', 'e', 'i', 'o', 'u')
victim = list(sys.stdin.readline())
victim = [char.lower() for char in victim]
remains = []

for pos, limb in enumerate(victim):
    if limb in targets:
        del victim[pos]
        remains.append(limb)

print(str.join('', victim).replace(' ', ''))
print(str.join('', remains))
