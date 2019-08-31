(ns meeting.core-test
  (:require [clojure.test :refer :all]
            [meeting.core :refer :all]))
(require '[clojure.string :as strg])

(defn do-test [s expect]
  (let [actual (meeting s)]
    (is (= actual expect))))

;;;;;;;;;;;;;;;;
(defn meeting-pl [s]
  (defn my-comp [a b]
    (if (= (a 1) (b 1))
      (compare (a 0) (b 0))
      (compare (a 1) (b 1))))
  (let [s1 (strg/split (strg/upper-case s) #";")
        s2 (sort my-comp (for [x s1] (strg/split x #":")))
        s3 (for [x s2] (str "(" (x 1) ", " (x 0) ")"))]
    (strg/join "" s3)))
;;;;;;;;;;;;;;;;

(deftest a-test1
  (testing "meeting"
    (do-test "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
             "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)")
    (do-test "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"
             "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)")
    (do-test "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"
             "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)")
    (do-test "Anna:Wahl;Grace:Gates;James:Russell;Elizabeth:Rudd;Victoria:STAN;Jacob:Wahl;Alex:Wahl;Antony:Gates;Alissa:Meta;Megan:Bell;Amandy:Stan;Anna:Steve"
             "(BELL, MEGAN)(GATES, ANTONY)(GATES, GRACE)(META, ALISSA)(RUDD, ELIZABETH)(RUSSELL, JAMES)(STAN, AMANDY)(STAN, VICTORIA)(STEVE, ANNA)(WAHL, ALEX)(WAHL, ANNA)(WAHL, JACOB)")
    (do-test "Ann:Russel;John:Gates;Paul:Wahl;Alex:Tolkien;Ann:Bell;Lewis:Kern;Sarah:Rudd;Sydney:Korn;Madison:Meta"
             "(BELL, ANN)(GATES, JOHN)(KERN, LEWIS)(KORN, SYDNEY)(META, MADISON)(RUDD, SARAH)(RUSSEL, ANN)(TOLKIEN, ALEX)(WAHL, PAUL)")
    (do-test "Paul:Arno;Matthew:Schwarz;Amandy:Meta;Grace:Meta;Ann:Arno;Alex:Schwarz;Jacob:Rudd;Amber:Cornwell"
             "(ARNO, ANN)(ARNO, PAUL)(CORNWELL, AMBER)(META, AMANDY)(META, GRACE)(RUDD, JACOB)(SCHWARZ, ALEX)(SCHWARZ, MATTHEW)")
    (do-test "Abba:Bell;Lewis:Cornwell;Jacob:STAN;Matthew:Schwarz;Ann:STAN;Sophia:Gates;Victoria:Korn;Anna:Bell;Paul:Kern;Alissa:Tolkien"
             "(BELL, ABBA)(BELL, ANNA)(CORNWELL, LEWIS)(GATES, SOPHIA)(KERN, PAUL)(KORN, VICTORIA)(SCHWARZ, MATTHEW)(STAN, ANN)(STAN, JACOB)(TOLKIEN, ALISSA)")
    (do-test "Victoria:Thorensen;Ann:Arno;Alexis:Wahl;Emily:Stan;Anna:STAN;Jacob:Korn;Sophia:Gates;Amber:Kern"
             "(ARNO, ANN)(GATES, SOPHIA)(KERN, AMBER)(KORN, JACOB)(STAN, ANNA)(STAN, EMILY)(THORENSEN, VICTORIA)(WAHL, ALEXIS)")
    (do-test "Andrew:Arno;Jacob:Russell;Anna:STAN;Antony:Gates;Amber:Korn;Lewis:Dorries;Ann:Burroughs;Alex:Kern;Anna:Arno;Elizabeth:Kern;John:Schwarz;Sarah:STAN"
             "(ARNO, ANDREW)(ARNO, ANNA)(BURROUGHS, ANN)(DORRIES, LEWIS)(GATES, ANTONY)(KERN, ALEX)(KERN, ELIZABETH)(KORN, AMBER)(RUSSELL, JACOB)(SCHWARZ, JOHN)(STAN, ANNA)(STAN, SARAH)")
    (do-test "Megan:Wahl;Alexis:Arno;Alex:Wahl;Grace:STAN;Amber:Kern;Amandy:Schwarz;Alissa:Stan;Paul:Kern;Ann:Meta;Lewis:Burroughs;Andrew:Bell"
             "(ARNO, ALEXIS)(BELL, ANDREW)(BURROUGHS, LEWIS)(KERN, AMBER)(KERN, PAUL)(META, ANN)(SCHWARZ, AMANDY)(STAN, ALISSA)(STAN, GRACE)(WAHL, ALEX)(WAHL, MEGAN)")))

(defn compose [k]
  (def fnams ["Emily" "Sophia" "Anna" "Anna" "Sarah" "Michael" "Jacob" "Alex" "Alex" "Alex" "Antony" "John"
              "Matthew" "Andrew" "Paul" "Paul" "Ann" "Ann" "Ann" "Ann" "Robert" "Megan" "Alissa" "Alexis"
              "Grace" "Madison" "Elizabeth" "James" "Amandy" "Abba" "Victoria" "Amber" "Sydney" "Haley" "Lewis"])
  (def names ["Korn" "Arno" "Arno" "Bell" "Bell" "Kern" "Kern" "Kern" "Russel" "Meta" "Meta" "Meta" "Cornwell"
              "Cornwell" "Wahl" "Wahl" "Wahl" "Wahl" "Dorny" "Dorries" "Stan" "STAN" "STAN" "Thorensen"
              "Schwarz" "Schwarz" "Gates" "Steve" "Tolkien" "Burroughs" "Gates" "Bell" "Korn" "Russell" "Rudd"])
  (loop [i 0 res ""]
    (if (> i k)
      (subs res 0 (- (count res) 1))
      (recur (inc i)
             (str res
                  (fnams (rand-int (count fnams)))
                  ":"
                  (names (rand-int (count names)))
                  ";")))))

(defn random-tests [k]
  (loop [i 0]
    (if (>= i k)
      (println "FINISHED")
      (let [rn (+ 8 (rand-int 12)) s (compose rn) sol (meeting-pl s)]
        (do-test s sol)
        (recur (inc i))))))

(deftest a-test2
  (testing "* Random tests *"
    (random-tests 50)))