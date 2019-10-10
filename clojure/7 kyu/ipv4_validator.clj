;;In this kata you have to write a method to verify the validity of IPv4 addresses.
;;Example of valid inputs:
;;"1.1.1.1"
;;"127.0.0.1"
;;"255.255.255.255"
;;Example of invalid input:
;;"1444.23.9"
;;"153.500.234.444"
;;"-12.344.43.11"

(ns clojure.ip-validation)

(defn validate-ip
  [s]
  (boolean (re-matches #"^([01]?[0-9]?[0-9]\.|2[0-4][0-9]\.|25[0-5]\.){3}([0 1]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$" s)))