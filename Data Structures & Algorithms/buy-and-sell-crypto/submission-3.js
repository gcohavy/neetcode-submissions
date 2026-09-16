class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0, l = prices[0], r = prices[prices.length - 1];
        for(let i = 1; i < prices.length; i++) {
            if(prices[i] > r) {
                r = prices[i];
            }
            max = Math.max(max, r - l);
            if(prices[i] < l) {
                r = prices[prices.length - 1];
                l = prices[i];
            }
        }
        return max;
    }
}
