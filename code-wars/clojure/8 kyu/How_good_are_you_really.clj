;;There was a test in your class and you passed it. Congratulations!
;;But you're an ambitious person. You want to know if you're better than the average student in your class.

;;You receive an array with your peers' test scores. Now calculate the average and compare your score!

;;Return True if you're better, else False!

;;Note:
;;Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

(ns kata.how-good-are-you)

(defn better_than_average [class_points your_points]
  (let [all_points (conj class_points your_points)
        tot_p (count all_points)
        sum_p (reduce + all_points)
        avg_p (quot sum_p tot_p)]
    (<= avg_p your_points)))