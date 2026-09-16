class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let str of strs) {
            const value = str;
            const key = str.split('').sort().join('');
            if(map.get(key)) {
                map.set(key, map.get(key).concat(value));
            } else {
                map.set(key, [value]);
            }
        }
        return [...map.values()];
    }
}
