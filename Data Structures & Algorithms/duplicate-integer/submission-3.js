class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for (let i = 0; i < nums.length; i++) {
            const number = nums[i];
            if(set.has(number)) return true;
            set.add(number);
        }
        return false;
    }
}
