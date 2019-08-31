;;Reverse the provided string.

;;Your result must be a string.

;;Clojure provides the clojure.string/reverse function, but it has been disabled for this challenge.

;;Remember to use Read-Search-Ask if you get stuck. Write your own code.

;;https://www.freecodecamp.com/challenges/reverse-a-string

(ns clojure.fcc.reverse)

(defn reverse-string [s]
  (apply str (reduce conj '() s)))