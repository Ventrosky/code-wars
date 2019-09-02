;;Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

;;For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

;;The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

;;Based on: http://oj.leetcode.com/problems/two-sum/

(ns twosum)
(defn twosum [numbers target]
  (let [compl (reduce #(assoc %1 %2 (- target %2)) {} numbers)]
    (loop [x 0
           c (get compl (numbers x))]
      (if (and (< x (count numbers)) (not (get compl c)))
        (recur (inc x) (get compl (numbers (inc x))))
        [x (.lastIndexOf numbers c)]))))