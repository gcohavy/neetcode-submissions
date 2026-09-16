class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let window = [];
        let result = [];
        for(let i = 0; i < k; i++) {
            window.push(nums[i]);
        }

        do {
            result.push(Math.max(...window));
            if(k < nums.length) window.push(nums[k]);
            window.shift();
            k++;
        } while (k <= nums.length);

        return result;
    }
}
