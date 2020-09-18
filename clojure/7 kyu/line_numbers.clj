(ns line-numbers
  (:require [clojure.string :as str]))

; Write a function which takes a list of strings and returns each line prepended by the correct number.
; The numbering starts at 1. The format is n: string. Notice the colon and space in between.

(defn number
  [lines]
  (map-indexed
   #(str/join [(inc %1) ": " %2])
   lines))