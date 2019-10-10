(ns twosum-test
  (:require [clojure.test :refer :all]
            [twosum :refer :all]
            [clojure.set :as set]))

(deftest twosum-example-tests
  (is (= (sort < (twosum '[1 2 3] 4)) '[0 2]))
  (is (= (sort < (twosum '[1234 5678 9012] 14690)) '[1 2]))
  (is (= (sort < (twosum '[2 2 3] 4)) '[0 1])))


(deftest random-tests
  (dotimes [_ 500]
    (let [amount (+ 4 (rand-int 15))
          nums (vec (set (take amount (repeatedly #(rand-int 1000)))))
          r (shuffle (range (dec amount)))
          i1 (first r)
          i2 (last r)
          expected (+ (nth nums i1) (nth nums i2))
          actual (twosum nums expected)]
      (is (= (+ (nth nums (first actual)) (nth nums (last actual))) expected)))))