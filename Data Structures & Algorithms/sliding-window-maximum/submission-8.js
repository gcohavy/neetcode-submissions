class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const deque = [];

        for(let i = 0; i < nums.length; i++) {
            while(deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
                deque.pop();
            }
            if(deque[0] <= i - k) deque.shift();
            deque.push(i);
            if(i >= k - 1) result.push(nums[deque[0]]);
        }
        

        return result;
    }
}
