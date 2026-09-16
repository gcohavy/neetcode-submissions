class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let mp = new Map();
        let mx = 0;
        let left = 0;
        for(let i = 0; i < s.length; i++) {
            if(mp.has(s[i])) {
                left = Math.max(left, mp.get(s[i]) + 1);
            }
            mp.set(s[i], i);
            mx = Math.max(mx, i - left + 1);
        }
        return mx;
    }
}
