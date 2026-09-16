class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = nums[nums.length - 1], l = 0, r = nums.length - 1, m;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            if(nums[m] < min) {
                min = nums[m];
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return min;
    }
}
