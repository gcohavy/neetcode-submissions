class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();
        let max = 0;
        let left = 0;
        for(let i = 0; i < s.length; i++) {
            const char = s[i];
            if(map.has(char) && map.get(char) >= left) {
                left = map.get(char) + 1;
            }
            map.set(char, i);
            max = Math.max(max, i - left + 1);
        }
        return max;
    }
}
