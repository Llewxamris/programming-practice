#!/bin/hy3
;;; Title: The DISHYMVOWLER
;; Author: Maxwel(l Haley
;; Description: Takes in a line of text from stdin, strips it of all vowles,
;; then prints the mangled text and it's vowel remains. Done for
;; /r/DailyProgrammer challenge #149.

;; You can invoke this script in two ways. First, call the script with no
;; arguments  and enter in a string. Everything until a newline will be
;; processed.

;; Second, pipe text from another program to this script.

;; `echo 'This is a sentace' | ./disemvowler.py`
;; `cat text1.txt | ./disemvowler.py`

;; This is a rewrite of disemvowler.py in Hy.
(import sys)

(setv targets (, "a" "e" "i" "o" "u"))
(setv victim (list(sys.stdin.readline)))
(setv victim (list-comp
               (.lower char)
               (char victim)))
(setv remains [])

(for [[pos limb] (enumerate victim)]
  (if limb in targets
    (do
      (del victim[pos])
      (.append remains limb))))

(print victim)
(print remains)
(print(-> (.join "" victim) (.replace " " "")))
(print(.join "" remains))
