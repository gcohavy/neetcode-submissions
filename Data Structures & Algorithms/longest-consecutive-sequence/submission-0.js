class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;
        let current = 1;
        for(const num of set) {
            if(!set.has(num - 1)) {
                let active = num;
                while(set.has(++active)) {
                    current++;
                }
                if(current > longest) longest = current;
                current = 1;
            }
        }
        return longest;
    }
}
