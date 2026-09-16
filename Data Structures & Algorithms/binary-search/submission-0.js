class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;
        let m, num;

        while(l <= r) {
            m = Math.floor((l + r) / 2);
            num = nums[m];
            if(num < target) {
                l = m + 1;
            } else if (num > target) {
                r = m - 1
            } else {
                return m;
            }
        }
        return -1;
    }
}
