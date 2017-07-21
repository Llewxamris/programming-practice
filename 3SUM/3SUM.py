#!/bin/python
"""
Title: 3SUM Algorithm implementation in Python
Author: Maxwell Haley
Description: Implementation of the 3SUM quadratic algorithm in Python. Done for
/r/DailyProgramming challenge #323.

Use the script by calling it followed by one of the included test files. Or, 
make your own test file by placing a list of numbers in one line.

./3SUM.py test1

This implementation does not use the combinations function from itertools,
despite it doing the same thing in fewer lines of code. I've included that sol-
-ution in this comment block for future reference,

Dead simple (and naive) solution by Reddit user _oats:

from itertools import combinations

while True:
    numbers = [int(n) for n in input().split()]
    zeroes = {tuple(sorted(n)) for n in combinations(numbers,3 ) if sum(n) == 0}
    for z in zeroes: print(*z)
    print()

"""
import sys

number_line = open(sys.argv[1]).readline()
numbers = number_line.split(' ')

# Convert String to Integers
numbers = list(map(int, numbers))
numbers.sort()
print(numbers)

answers = []

for index, value in enumerate(numbers):
    if index < len(numbers) - 3:
        a = numbers[index]
        start = index + 1
        end = len(numbers) - 1

        while start < end:
            b = numbers[start]
            c = numbers[end]
            if a + b + c == 0:
                d = [a, b, c]
                if d not in answers:
                    answers.append([a, b, c])
                end = end - 1
            elif a + b + c > 0:
                end = end - 1
            else:
                start = start +1

print(sorted(answers))
