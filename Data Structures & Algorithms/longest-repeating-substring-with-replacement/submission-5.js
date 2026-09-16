class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let l = 0, r = 0;
        let max = 0, maxf = 1;
        
        for(let r = 0; r < s.length; r++) {
            map.set(s[r], map.has(s[r]) ? map.get(s[r]) + 1 : 1);
            maxf = Math.max(maxf, map.get(s[r]));
            while (maxf + k < r - l + 1) {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
            max = Math.max(max, r - l + 1);
        }

        return max;
    }
}
