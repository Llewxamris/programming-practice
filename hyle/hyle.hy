#!/bin/hy3
;;;; Hyle - Generate the cost to tile a floor.
;;; A very basic script to calculate the area of a floor, then to determine the
;;; cost to tile that floor. Uses the Hy programming language. To run, make
;;; sure you have both python3 installed, and the pip package 'hy' installed.
;;;   ./hyle.hy
;;;   or
;;;   hy hyle.hy

(defn getInput []
  ;; Get's the users input, and keeps asking them until a digit is entered.
  ;; Uses some recursion, not because it's faster, but because it was more fun
  ;; to write.
  (setv userInput (input "> "))
  (if(not (.isdigit userInput))
    (do
      (print "Please enter a digit.")
      (getInput)))
  (int userInput))

(defn main []
  ;; Print welcome message to the user, call getInput, and calculate the total
  ;; cost.
  (print "Welcome to the tile cost generator!")
  (print "Each tile is 1 unit by 1 unit.")
  (print "How many units wide is the room?")
  (setv width (getInput))
  (print width)
  (print "How many units long is the room?")
  (setv length (getInput))
  (print "What is the cost per tile?")
  (setv cost (getInput))
  ;; (-> (* width length cost) (setv total))
  (setv total (* (* width length) cost))
  (print (+ "Your total is: " (str total))))

(main)
