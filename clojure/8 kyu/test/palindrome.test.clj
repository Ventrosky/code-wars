(ns clojure.palindrome-test
  (:require [clojure.test :refer :all]
            [clojure.fcc.palindrome :refer :all]))

(defn boolean? [x]
  (instance? Boolean x))

(deftest palindrome-test
  (is (boolean? (palindrome? "eye"))
      "should return a boolean")

  (is (palindrome? "eye")
      "should return true")

  (is (palindrome? "_eye")
      "should return true")

  (is (palindrome? "race car")
      "should return true")

  (is (not (palindrome? "not a palindrome"))
      "should return false")

  (is (palindrome? "A man, a plan, a canal. Panama")
      "should return true")

  (is (palindrome? "never odd or even")
      "should return true")

  (is (not (palindrome? "nope"))
      "should return false")

  (is (not (palindrome? "almostomla"))
      "should return false")

  (is (palindrome? "My age is 0, 0 si ega ym.")
      "should return true")

  (is (not (palindrome? "1 eye for of 1 eye."))
      "should return false")

  (is (palindrome? "0_0 (: /-\\ :) 0-0")  ;; the backslash is escaped
      "should return true")

  (is (not (palindrome? "five|\\_/|four")) ;; the backslash is escaped
      "should return false"))