(ns kata.how-good-are-you-test
  (:require [clojure.test :refer :all]
            [kata.how-good-are-you :refer [better_than_average]]))


(defn assert-equals [act exp]
  (is (= act exp)))
(defn randGenerate [n]
  (take n (repeatedly #(rand-int 100))))
(defn solution [class_points your_points]
  (> your_points (/ (reduce + class_points) (count class_points))))
(deftest how-good-are-you-tests
  (testing "Basic Tests"
    (assert-equals (better_than_average [2 3] 5) true)
    (assert-equals (better_than_average [100 40 34 57 29 72 57 88] 75) true)
    (assert-equals (better_than_average [12 23 34 45 56 67 78 89 90] 69) true))
  (testing "Random Tests"
    (loop [a 0
           lst (randGenerate 100)
           avg (rand-int 100)]
      (if (= a 10) 0
  ;else
          (do
            (assert-equals (better_than_average lst avg) (solution lst avg))
            (recur (inc a) (randGenerate 100) (rand-int 100)))))))