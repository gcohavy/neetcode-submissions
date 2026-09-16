class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1, m, min = nums[0], minIndex = 0;

        while(l <= r) {
            m = Math.floor((l + r) / 2);
            if(nums[m] < nums[0]) {
                min = nums[m];
                minIndex = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        if(target === min) return minIndex;

        if(minIndex === 0 || target < nums[0]) {
            l = minIndex;
            r = nums.length - 1;
        } else {
            r = minIndex - 1;
            l = 0;
        }

        while(l <= r) {
            m = Math.floor((l + r) / 2);
            const num = nums[m];

            if(target > num) {
                l = m + 1;
            } else if (target < num) {
                r = m - 1;
            } else {
                return m;
            }
        }
        return -1;
    }
}
