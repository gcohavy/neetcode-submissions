class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let frequency = Array(nums.length + 1).fill(null).map(() => []);
        let result = [];

        // Count frequencies
        for (let num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        // Bucket frequencies
        for (let [key, value] of map.entries()) {
            frequency[value].push(key);
        }

        // Collect top k
        for (let i = frequency.length - 1; i >= 0 && result.length < k; i--) {
            result = result.concat(frequency[i]);
        }

        return result.slice(0, k);
    }

}
