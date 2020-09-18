(ns mexican-wave
  (:require [clojure.string :as str]))

;; In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
;; Rules
;; 1.  The input string will always be lower case but maybe empty.
;; 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
;; Example
;; wave ("hello") => [] string {"Hello", "hEllo", "heLlo", "helLo", "hellO"}

(defn wave
  [t]
  (let [s (into [] (seq t))
        upper-at #(str/join (assoc %1 %2 (str/upper-case %3)))]
    (into 
     []
     (remove
      nil?
      (map-indexed
       (fn [i c]
         (when (not= \space c)
           (upper-at s i c)))
       s)))))


