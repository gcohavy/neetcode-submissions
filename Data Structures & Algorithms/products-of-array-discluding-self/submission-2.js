class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [nums[0]];
        let suffix = [nums[nums.length - 1]];
        let result = [];
        for(let i = 0; i < nums.length; i++) {
            if(i > 0) {
                prefix.push(nums[i] * prefix[i-1]);
                if(i < nums.length - 1) 
                    suffix.push(nums[nums.length - 1 - i] * suffix[i-1]);
            }
        }

        for (let i = 0; i < nums.length; i++) {
            let current = 1;
            if(i > 0) current *= prefix[i - 1];
            if(i < nums.length - 1) current *= suffix[nums.length - 2 - i];
            result.push(current);
        }

        return result;
    }
}
