class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a - b);
        const result = [];
        let l, r, current;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0 || (i > 0 && nums[i] === nums[i-1])) continue;
            l = i + 1;
            r = nums.length - 1;
            while(l < r) {
                current = nums[i] + nums[l] + nums[r];
                if(current === 0) {
                    result.push([nums[i],nums[l],nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--; 
                    l++;
                    r--;
                } else if (current < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return result;
    }
}