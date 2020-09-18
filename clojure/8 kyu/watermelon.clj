(ns watermelon)

; Given an integral number of watermelons w (1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.

(defn divide
  [n]
  (and (even? n) (> n 2)))