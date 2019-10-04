Test.describe("Sum of Consecutives",function() {
Test.it("Basic tests",function() {    
    Test.assertSimilar(sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
    Test.assertSimilar(sumConsecutives([1,1,7,7,3]),[2,14,3], "on list [1,1,7,7,3] you get ")
    Test.assertSimilar(sumConsecutives([-5,-5,7,7,12,0]),[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
    Test.assertSimilar(sumConsecutives([3,3,3,3,1]),[12, 1], "on list [3,3,3,3,1] you get " )
    Test.assertSimilar(sumConsecutives([2,2,-4,4,5,5,6,6,6,6,6,1]),[4, -4, 4, 10, 30, 1], "on list [2,2,-4,4,5,5,6,6,6,6,6,1] you get ")
    Test.assertSimilar(sumConsecutives([1,1,1,1,1,3]),[5, 3], "on list [1,1,1,1,1,3] you get ")
    Test.assertSimilar(sumConsecutives([1,-1,-2,2,3,-3,4,-4]),[1, -1, -2, 2, 3, -3, 4, -4], "on list [1,-1,-2,2,3,-3,4,-4] you get ")
})})