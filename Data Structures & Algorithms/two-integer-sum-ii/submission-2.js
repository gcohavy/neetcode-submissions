class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const set = new Set(numbers);
        let result = [];
        let second;
        for (let i = 0; i < numbers.length; i++) {
            if(second !== undefined) {
                if(numbers[i] === second) {
                    result.push(i + 1);
                    break;
                }
                continue;
            }
            if(set.has(target - numbers[i])) {
                result.push(i + 1);
                second = target - numbers[i];
            }
        }

        return result;
    }
}
