(ns printer.core-test
  (:require [clojure.test :refer :all]
            [printer.core :refer :all]))

(defn test-assert [act exp]
  (is (= act exp)))

(deftest a-test1
  (testing "printer-error"
    (def u "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
    (test-assert (printer-error u) "3/56")
    (def u "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
    (test-assert (printer-error u) "6/60")
    (def u "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu")
    (test-assert (printer-error u) "11/65")))

;;;;;;;;;;;;;;;;;;;;;;;
(defn mk-sol [s]
  (list (reduce +
                (for [x (map char (range 110 123))
                      :let [c (count (filter (fn [v] (= x v)) s))]]
                  c)) (count s)))
(defn printer-error-sol [s]
  (clojure.string/join "/" (mk-sol s)))
(defn doex-sol []
  (loop [i 0 n (+ 97 (rand-int 26)) s ""]
    (if (>= i 30)
      s
      (recur
       (inc i)
       (if (= 0 (mod i 5)) (+ 97 (rand-int 13)) (+ 97 (rand-int 26)))
       (str s (char n))))))
;;;;;;;;;;;;;;;;;;;;;;;
(defn random-tests []
  (loop [i 0]
    (if (<= i 200)
      (let [s (doex-sol)]
        ;(println " RandomTest " i "Strings s: " s " ---> " (printer-error-sol s))  
        (is (= (printer-error s) (printer-error-sol s)))
        (recur (inc i))))))

(deftest a-test2
  (testing "Random Tests"
    (random-tests)))