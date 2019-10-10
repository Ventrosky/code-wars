(ns clojure.ip-validation-test
  (:require [clojure.test :refer :all]
            [clojure.ip-validation :refer :all]))

(deftest
  how-old
  (testing "Testing how old"
    (is (false? (validate-ip "")))
    (is (false? (validate-ip "12.b.3.a")))
    (is (false? (validate-ip "abc.def.ghi.jkl")))
    (is (false? (validate-ip "123.456.789.0")))
    (is (false? (validate-ip "12.34.56")))
    (is (false? (validate-ip "256.1.2.3")))
    (is (false? (validate-ip "1.2.3.4.5")))
    (is (false? (validate-ip "123,45,67,89")))
    (is (false? (validate-ip " 1.2.3.4")))
    (is (false? (validate-ip "1.2.3.4 ")))
    (is (validate-ip "127.0.0.1"))
    (is (validate-ip "1.1.1.1"))
    (is (validate-ip "4.4.4.4"))
    (is (validate-ip "255.255.255.255"))
    (is (validate-ip "192.168.0.1"))
    (is (validate-ip "255.0.1.0"))
    (is (validate-ip "54.2.2.2"))
    (is (validate-ip "1.2.3.4"))
    (is (validate-ip "255.127.63.31"))
    (is (validate-ip "32.64.128.255"))))