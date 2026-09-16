class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        let tuple = [];
        for(let i = 0; i < temperatures.length; i++) {
            if(tuple.length) {
                while(tuple.length && tuple[tuple.length - 1][0] < temperatures[i]) {
                    const lastI = tuple[tuple.length - 1][1];
                    result[lastI] = i - lastI;
                    tuple.pop();
                }
            }
            
            if(temperatures[i + 1] && temperatures[i] < temperatures[i+1]) {
                result[i] = 1;
            } else {
                result[i] = 0;
                tuple.push([temperatures[i], i]);
            }
        }
        return result;
    }
}
