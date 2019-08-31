(ns clojure.fcc.reverse-test
  (:require [clojure.test :refer :all]
            [clojure.fcc.reverse :refer :all]))


(deftest reverse-test
  (with-redefs
   [clojure.string/reverse
    (fn [& _]
      (throw (Exception. "Sorry! The clojure.string/reverse built-in is disabled for this kata!")))]

    (is (string? (reverse-string "hello"))
        "should return a string")

    (is (= (reverse-string "hello")
           "olleh")
        "should return \"olleh\"")

    (is (= (reverse-string "Howdy")
           "ydwoH")
        "should return \"ydwoH\"")

    (is (= (reverse-string "Greetings from Earth")
           "htraE morf sgniteerG")
        "should return \"htraE morf sgniteerG\"")))