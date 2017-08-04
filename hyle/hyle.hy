#!/bin/hy3
(defn getInput []
  (setv userInput (input "> "))
  (if(not (.isdigit userInput))
    (do
      (print "Please enter a digit.")
      (getInput)))
  (int userInput))

(defn main []
  "Main functions, prints and does math."
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
