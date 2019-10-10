;;There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
;;A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup" .
;;As a simplification, you may assume that no letter occurs more than once in the secret string.
;;You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

(ns random-triplets)

(defn in?
  [coll elm]
  (some #(= elm %) coll))

(defn check-msg
  [msg]
  (fn [[k x]]
    (let [xv (vec x)]
      (when (every? #(in? msg %) xv)
        k))))

(defn recover-secret [triplets]
  (let [duple (into [] (set (apply concat (map (fn [[a b c]] [[a b] [b c] [a c]]) triplets))))
        chrs (set (flatten duple))
        init (apply hash-map (interleave chrs (repeat (count chrs) '())))
        graph (reduce (fn [new-map [p1 p2]]
                        (update new-map p2 concat [p1]))
                      init
                      duple)]
    (clojure.string/join
     ""
     (loop [lstg graph
            msg []]
       (if (= (count (keys lstg)) 0)
         msg
         (let [fu-msg (check-msg msg)
               nxt (some #(fu-msg %) (seq lstg))]
           (recur (dissoc lstg nxt) (conj msg nxt))))))))
