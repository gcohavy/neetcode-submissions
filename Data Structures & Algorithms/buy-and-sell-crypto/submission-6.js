class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0, l = prices[0];
        for(let i = 1; i < prices.length; i++) {
            l = Math.min(l, prices[i]);
            max = Math.max(max, prices[i] - l);
        }
        return max;
    }
}
