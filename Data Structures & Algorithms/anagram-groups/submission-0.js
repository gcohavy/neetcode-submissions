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
            console.log(key + ': ' + value);
            if(map.get(key)) {
                map.set(key, map.get(key).concat(value));
            } else {
                map.set(key, [value]);
            }
            console.log('current map: ' + JSON.stringify(map));
        }
        return [...map.values()];
    }
}
